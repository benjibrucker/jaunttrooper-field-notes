'use strict';
const qs=Array.isArray(window.HANDOFF_QUESTIONS)?window.HANDOFF_QUESTIONS:[];
const el=id=>document.getElementById(id),repo='https://github.com/benjibrucker/mbbolt-firestorm-research';
const key=q=>'jaunttrooper-field-note-v1:'+q.id,confidenceKey=q=>key(q)+':confidence';
const drafts=new Map(),confidences=new Map();
let selected=0,visible=[],storageAvailable=true;
function read(map,q,suffix){if(map.has(q.id))return map.get(q.id);try{return localStorage.getItem(suffix(q))||''}catch{storageAvailable=false;return ''}}
const answer=q=>read(drafts,q,key),confidence=q=>read(confidences,q,confidenceKey);
function save(map,q,suffix,value){map.set(q.id,value);try{localStorage.setItem(suffix(q),value)}catch{storageAvailable=false}}
function say(message){el('status').textContent=message}
function refreshChoices(){
 const scope=el('scope').value;
 visible=qs.map((_,i)=>i).filter(i=>scope==='all'||(scope==='new'?qs[i].id.startsWith('H-'):!!answer(qs[i]).trim()));
 if(!visible.length&&scope==='drafts'){el('scope').value='new';visible=qs.map((_,i)=>i).filter(i=>qs[i].id.startsWith('H-'))}
 if(!visible.includes(selected))selected=visible[0]??0;
 const select=el('question');select.replaceChildren();
 for(const i of visible){const q=qs[i];select.add(new Option((i+1)+'. '+q.title+(answer(q).trim()?' · draft':''),String(i)))}
 el('progress').textContent=qs.filter(q=>answer(q).trim()).length+' local drafts · '+qs.length+' questions';
 render();
}
function render(){
 const q=qs[selected];if(!q){say('No questions are available.');return}
 el('question').value=String(selected);el('qid').textContent=q.id+' · '+(q.category||'Field question');
 el('title').textContent=q.title;el('prompt').textContent=q.question;
 el('why').textContent=q.why||'Your observation can help us compare the recovered game behavior.';
 el('why').parentElement.querySelector('summary').title=q.why||'Open for background and answer guidance.';
 el('evidence-prompt').textContent=q.evidencePrompt||'';el('existing-knowledge').textContent=q.existingKnowledge||'';
 el('answer').value=answer(q);el('confidence').value=confidence(q);
 const picture=el('picture-note'),ids=Array.isArray(q.pictures)?q.pictures.filter(id=>/^\d+$/.test(String(id))):[];
 picture.hidden=!ids.length;
 if(ids.length){picture.replaceChildren();picture.append('This question mentions original picture '+ids.map(id=>'PICT '+id).join(', ')+'. Numbered-cell identification needs the original gallery on your local computer. Memory answers are welcome here. ');
  const link=document.createElement('a');link.href='http://127.0.0.1:8767/working/project-tracker/dist/index.html#field-guide';link.textContent='Open local gallery (this computer only) ↗';picture.append(link)}
 el('code-note').hidden=!(q.id==='H-CREATURE'||q.id==='event-mutter-movement'||/mutter/i.test(q.title+' '+q.question));
 const pos=visible.indexOf(selected);el('previous').disabled=pos<=0;el('next').disabled=pos<0||pos>=visible.length-1;
 el('find-log').href=repo+'/issues?q='+encodeURIComponent('is:issue in:title "[Field answer] '+q.id+':"');
 say(storageAvailable?'Drafts save as you type in this browser. GitHub logging is a separate step.':'Browser storage unavailable. Drafts stay in this tab; download before leaving.');
}
function update(){
 const q=qs[selected];save(drafts,q,key,el('answer').value);save(confidences,q,confidenceKey,el('confidence').value);
 const option=el('question').selectedOptions[0];if(option)option.textContent=(selected+1)+'. '+q.title+(el('answer').value.trim()?' · draft':'');
 el('progress').textContent=qs.filter(row=>answer(row).trim()).length+' local drafts · '+qs.length+' questions';
 say(storageAvailable?'Draft saved in this browser. Use the GitHub button to prepare a remote log.':'Draft in this tab only. Download before leaving.');
}
function logCurrent(){
 const q=qs[selected],value=answer(q).trim();
 if(!value){say('Write an answer first, even if it is “unsure” or “never encountered this.”');el('answer').focus();return}
 const title='[Field answer] '+q.id+': '+q.title;
 const body='Question ID: '+q.id+'\nQuestion: '+q.question+'\nConfidence: '+(confidence(q)||'Not specified')+'\nPrepared: '+new Date().toISOString()+'\n\nAnswer:\n'+value;
 const url=repo+'/issues/new?title='+encodeURIComponent(title)+'&body='+encodeURIComponent(body);
 if(url.length>7000){window.open(repo+'/issues/new','_blank','noopener,noreferrer');say('This answer is too long for a reliable prefilled link. A blank GitHub issue was requested; download JSON and paste your answer there before submitting.');return}
 window.open(url,'_blank','noopener,noreferrer');
 say('A prepared GitHub issue was requested in a new tab. Sign in and press “Submit new issue” there to log it.');
}
function download(){
 const answers=qs.map(q=>({questionId:q.id,title:q.title,answer:answer(q),confidence:confidence(q)})).filter(row=>row.answer.trim()||row.confidence);
 const blob=new Blob([JSON.stringify({schemaVersion:1,exportedAt:new Date().toISOString(),answers},null,2)],{type:'application/json'});
 const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='jaunttrooper-answers.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
 el('transfer-status').textContent='Downloaded '+answers.length+' entries. Keep this file somewhere you can find it.';
}
async function importAnswers(file){
 if(file.size>5000000)throw new Error('This file is larger than the 5 MB answer export limit.');
 const data=JSON.parse(await file.text());if(!data||!Array.isArray(data.answers))throw new Error('Expected a JSON answer export with an answers list.');
 const known=new Map(qs.map(q=>[q.id,q]));let count=0;
 for(const row of data.answers){if(!row||!known.has(row.questionId)||typeof row.answer!=='string'||row.answer.length>50000)continue;
  const q=known.get(row.questionId);save(drafts,q,key,row.answer);
  if(['Certain','Fairly sure','Unsure','Never encountered this',''].includes(row.confidence))save(confidences,q,confidenceKey,row.confidence);
  count++;
 }
 refreshChoices();return count;
}
el('scope').addEventListener('change',refreshChoices);
el('question').addEventListener('change',event=>{selected=Number(event.target.value);render()});
el('answer').addEventListener('input',update);el('confidence').addEventListener('change',update);
el('previous').addEventListener('click',()=>{selected=visible[visible.indexOf(selected)-1];render()});
el('next').addEventListener('click',()=>{selected=visible[visible.indexOf(selected)+1];render()});
el('log').addEventListener('click',logCurrent);el('download').addEventListener('click',download);
el('import').addEventListener('change',async event=>{const file=event.target.files?.[0];if(!file)return;
 try{el('transfer-status').textContent='Imported '+await importAnswers(file)+' local drafts. Review them before logging any answer in GitHub.'}
 catch(error){el('transfer-status').textContent='Import failed: '+error.message}event.target.value='';
});
refreshChoices();
