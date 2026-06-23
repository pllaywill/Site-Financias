let dados=JSON.parse(localStorage.getItem('dados'))||[];

function salvar(){
localStorage.setItem('dados',JSON.stringify(dados));
render();
}

function adicionar(){
const desc=document.getElementById('desc').value;
const valor=parseFloat(document.getElementById('valor').value);
const tipo=document.getElementById('tipo').value;
if(!desc||!valor)return;
dados.push({desc,valor,tipo});
salvar();
}

function excluir(i){
dados.splice(i,1);
salvar();
}

function render(){
let r=0,d=0;
const lista=document.getElementById('lista');
lista.innerHTML='';
dados.forEach((item,i)=>{
if(item.tipo==='receita')r+=item.valor; else d+=item.valor;
lista.innerHTML+=`<tr><td>${item.desc}</td><td>${item.tipo}</td><td>R$ ${item.valor}</td><td><button onclick="excluir(${i})">Excluir</button></td></tr>`;
});
document.getElementById('receitas').innerText='R$ '+r.toFixed(2);
document.getElementById('despesas').innerText='R$ '+d.toFixed(2);
document.getElementById('lucro').innerText='R$ '+(r-d).toFixed(2);
}
render();
