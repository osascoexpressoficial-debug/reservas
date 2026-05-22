const SAC_URL='https://wa.me/5511986661784';
const SUPORTE_URL='https://wa.me/11924782555';
const GRUPO_URGENCIA_URL='https://chat.whatsapp.com/CRpRs02U7v868ZZxRopUji';
const ADMIN_PASS='1234';
const APP_VERSION='BETA D3.6.3.8';
const APP_BUILD='reserva-oe-aceite-completo-gestao-blindada';
const TERM_VERSION='RESERVA_OE_TERMO_COMPLETO_V1_2026';
const TERM_TITLE='Termo de Aceite Digital e Uso da Plataforma Reserva OE';
const DRIVE_FOLDER_ID='1ab62dyqfccEyZTMK0drpo84aU6FDaSqq';
const TERM_ACCEPT_ENDPOINT=''; // Produção: inserir aqui o URL do Google Apps Script Web App para arquivar no Drive/Sheets.

const TERM_FULL_TEXT = `TERMO DE ACEITE DIGITAL E USO DA PLATAFORMA RESERVA OE
OSASCO EXPRESS SERVIÇOS LTDA – ME
CNPJ 54.707.097/0001-04
Endereço: Av. Diogo Antônio Feijó, 855, Osasco/SP

1. IDENTIFICAÇÃO DO PARCEIRO
Ao informar meu número de WhatsApp, acessar a plataforma Reserva OE e marcar o aceite eletrônico, declaro que sou o parceiro identificado no cadastro da Osasco Express, com os dados informados ou previamente registrados no banco de parceiros da empresa.
Declaro, ainda, que manterei meus dados atualizados, incluindo nome, sobrenome, telefone, chave PIX, veículo e demais informações necessárias à organização operacional.

2. CIÊNCIA SOBRE A NATUREZA DA PLATAFORMA
Declaro estar ciente de que a Reserva OE é uma ferramenta digital da Osasco Express destinada à organização de disponibilidade, reservas operacionais, reabertura de horários e acompanhamento da operação.
A plataforma não representa controle de jornada, ponto eletrônico, escala obrigatória, relação de emprego, subordinação hierárquica ou obrigação de aceitar horários.

3. RESERVA VOLUNTÁRIA DE HORÁRIOS
Declaro estar ciente de que os horários exibidos na Reserva OE são horários disponíveis para reserva voluntária.
Tenho liberdade para acessar ou não a plataforma, reservar ou não reservar horários disponíveis, escolher os horários conforme minha disponibilidade, não assumir quantidade mínima de reservas, reabrir uma reserva quando não puder atender e prestar serviços para outras empresas, plataformas ou clientes, sem exclusividade com a Osasco Express.
Ao confirmar uma reserva, declaro que estou manifestando voluntariamente minha disponibilidade para aquele horário, para fins de organização operacional da Osasco Express e de seus clientes.

4. RESPONSABILIDADE SOBRE RESERVA CONFIRMADA
Declaro estar ciente de que, ao confirmar uma reserva, aquele horário fica separado em meu nome dentro da operação.
Caso eu não possa atender a reserva confirmada, comprometo-me a utilizar a função Reabrir reserva/Reabrir horário no próprio sistema, para que a vaga volte a ficar disponível e o suporte da Osasco Express possa reorganizar a operação.
Declaro compreender que a reabertura de reserva é permitida, mas que o histórico de disponibilidade, reaberturas, ausências sem reabertura, reclamações operacionais e demais ocorrências poderá ser considerado pela gestão da Osasco Express para fins de prioridade futura em horários recorrentes, fila de espera operacional, análise cadastral ou restrição temporária de novas reservas.

5. AUSÊNCIA DE VÍNCULO EMPREGATÍCIO
Declaro estar ciente de que o uso da Reserva OE não cria, por si só, relação de emprego, vínculo trabalhista, controle de jornada, subordinação, exclusividade ou dependência econômica com a Osasco Express ou com os estabelecimentos comerciais atendidos.
Declaro compreender que atuo como parceiro autônomo, com liberdade de aceitar ou não reservas, organizar minha própria disponibilidade e prestar serviços a terceiros.

6. RELAÇÃO COM CLIENTES DA OSASCO EXPRESS
Declaro estar ciente de que restaurantes, lanchonetes, pizzarias, bares, docerias, mercados ou quaisquer estabelecimentos atendidos pela Osasco Express são clientes da Osasco Express, não sendo meus empregadores.
Declaro que qualquer contato, retirada, entrega ou atuação nesses locais ocorre dentro da organização operacional da Osasco Express, sem criação de vínculo direto com os estabelecimentos atendidos.

7. USO DE DADOS E REGISTROS DIGITAIS
Autorizo a Osasco Express a registrar e armazenar, para fins operacionais, contratuais, administrativos, financeiros, comprobatórios e de segurança jurídica, os dados relacionados ao meu uso da Reserva OE, incluindo nome e sobrenome, telefone/WhatsApp, data e hora do aceite, versão do termo aceito, reservas confirmadas, reservas reabertas, status operacional do cadastro, histórico de disponibilidade, registros de acesso, navegador, dispositivo, endereço IP quando tecnicamente disponível e comprovante eletrônico do aceite.
Declaro estar ciente de que esses dados serão tratados conforme a Lei Geral de Proteção de Dados Pessoais, Lei nº 13.709/2018.

8. REGISTRO E ARQUIVAMENTO DO ACEITE
Declaro estar ciente de que, ao marcar o aceite e clicar em Aceitar e continuar, será gerado um registro eletrônico contendo meus dados de identificação, data, hora, versão do termo e declaração de aceite.
Esse registro poderá ser armazenado em banco de dados, planilha, arquivo JSON, PDF, Google Drive ou outro ambiente digital seguro utilizado pela Osasco Express.

9. CONTRATO PRINCIPAL E DOCUMENTOS COMPLEMENTARES
Declaro estar ciente de que este aceite digital não substitui eventual contrato principal de parceria autônoma firmado com a Osasco Express, mas funciona como confirmação eletrônica complementar de ciência sobre o uso da plataforma Reserva OE, suas regras operacionais e sua natureza voluntária.
Em caso de divergência entre este aceite e contrato principal formalmente assinado, o contrato principal deverá ser analisado em conjunto com este registro eletrônico e demais documentos operacionais.

10. DECLARAÇÃO FINAL DE CIÊNCIA
Declaro que tive acesso a este termo, compreendi suas condições principais e aceito utilizar a Reserva OE como ferramenta de organização de reservas operacionais voluntárias.
Declaro compreender que não sou obrigado a reservar horários; posso escolher minha disponibilidade; posso reabrir reservas quando não puder atender; o histórico operacional pode influenciar minha prioridade futura de reservas; a plataforma não representa escala obrigatória, controle de jornada ou vínculo empregatício; e meus dados poderão ser armazenados para fins operacionais e comprobatórios.`;
const TERM_FULL_HTML = `<h4>1. Identificação do parceiro</h4>
<p>Ao informar meu número de WhatsApp, acessar a plataforma <b>Reserva OE</b> e marcar o aceite eletrônico, declaro que sou o parceiro identificado no cadastro da Osasco Express, com os dados informados ou previamente registrados no banco de parceiros da empresa.</p>
<p>Declaro, ainda, que manterei meus dados atualizados, incluindo nome, sobrenome, telefone, chave PIX, veículo e demais informações necessárias à organização operacional.</p>
<h4>2. Ciência sobre a natureza da plataforma</h4>
<p>Declaro estar ciente de que a <b>Reserva OE</b> é uma ferramenta digital da Osasco Express destinada à organização de <b>disponibilidade, reservas operacionais, reabertura de horários e acompanhamento da operação</b>.</p>
<p>A plataforma não representa controle de jornada, ponto eletrônico, escala obrigatória, relação de emprego, subordinação hierárquica ou obrigação de aceitar horários.</p>
<h4>3. Reserva voluntária de horários</h4>
<p>Declaro estar ciente de que os horários exibidos na Reserva OE são <b>horários disponíveis para reserva voluntária</b>.</p>
<p>Tenho liberdade para: acessar ou não a plataforma; reservar ou não reservar horários disponíveis; escolher os horários conforme minha disponibilidade; não assumir quantidade mínima de reservas; reabrir uma reserva quando não puder atender; e prestar serviços para outras empresas, plataformas ou clientes, sem exclusividade com a Osasco Express.</p>
<p>Ao confirmar uma reserva, declaro que estou manifestando voluntariamente minha disponibilidade para aquele horário, para fins de organização operacional da Osasco Express e de seus clientes.</p>
<h4>4. Responsabilidade sobre reserva confirmada</h4>
<p>Declaro estar ciente de que, ao confirmar uma reserva, aquele horário fica separado em meu nome dentro da operação.</p>
<p>Caso eu não possa atender a reserva confirmada, comprometo-me a utilizar a função <b>Reabrir reserva / Reabrir horário</b> no próprio sistema, para que a vaga volte a ficar disponível e o suporte da Osasco Express possa reorganizar a operação.</p>
<p>Declaro compreender que a reabertura de reserva é permitida, mas que o histórico de disponibilidade, reaberturas, ausências sem reabertura, reclamações operacionais e demais ocorrências poderá ser considerado pela gestão da Osasco Express para fins de prioridade futura em horários recorrentes, fila de espera operacional, análise cadastral ou restrição temporária de novas reservas.</p>
<h4>5. Ausência de vínculo empregatício</h4>
<p>Declaro estar ciente de que o uso da Reserva OE não cria, por si só, relação de emprego, vínculo trabalhista, controle de jornada, subordinação, exclusividade ou dependência econômica com a Osasco Express ou com os estabelecimentos comerciais atendidos.</p>
<p>Declaro compreender que atuo como parceiro autônomo, com liberdade de aceitar ou não reservas, organizar minha própria disponibilidade e prestar serviços a terceiros.</p>
<h4>6. Relação com clientes da Osasco Express</h4>
<p>Declaro estar ciente de que restaurantes, lanchonetes, pizzarias, bares, docerias, mercados ou quaisquer estabelecimentos atendidos pela Osasco Express são clientes da Osasco Express, não sendo meus empregadores.</p>
<p>Declaro que qualquer contato, retirada, entrega ou atuação nesses locais ocorre dentro da organização operacional da Osasco Express, sem criação de vínculo direto com os estabelecimentos atendidos.</p>
<h4>7. Uso de dados e registros digitais</h4>
<p>Autorizo a Osasco Express a registrar e armazenar, para fins operacionais, contratuais, administrativos, financeiros, comprobatórios e de segurança jurídica, dados relacionados ao meu uso da Reserva OE.</p>
<p>Esses dados podem incluir: nome e sobrenome; telefone/WhatsApp; data e hora do aceite; versão do termo aceito; reservas confirmadas; reservas reabertas; status operacional do cadastro; histórico de disponibilidade; registros de acesso, navegador, dispositivo e endereço IP quando tecnicamente disponível; e comprovante eletrônico do aceite.</p>
<p>Declaro estar ciente de que esses dados serão tratados conforme a Lei Geral de Proteção de Dados Pessoais, Lei nº 13.709/2018.</p>
<h4>8. Registro e arquivamento do aceite</h4>
<p>Declaro estar ciente de que, ao marcar o aceite e clicar em <b>Aceitar e continuar</b>, será gerado um registro eletrônico contendo meus dados de identificação, data, hora, versão do termo e declaração de aceite.</p>
<p>Esse registro poderá ser armazenado em banco de dados, planilha, arquivo JSON, PDF, Google Drive ou outro ambiente digital seguro utilizado pela Osasco Express.</p>
<h4>9. Contrato principal e documentos complementares</h4>
<p>Declaro estar ciente de que este aceite digital não substitui eventual contrato principal de parceria autônoma firmado com a Osasco Express, mas funciona como confirmação eletrônica complementar de ciência sobre o uso da plataforma Reserva OE, suas regras operacionais e sua natureza voluntária.</p>
<p>Em caso de divergência entre este aceite e contrato principal formalmente assinado, o contrato principal deverá ser analisado em conjunto com este registro eletrônico e demais documentos operacionais.</p>
<h4>10. Declaração final de ciência</h4>
<p>Declaro que tive acesso a este termo, compreendi suas condições principais e aceito utilizar a Reserva OE como ferramenta de organização de reservas operacionais voluntárias.</p>
<p>Declaro compreender que: não sou obrigado a reservar horários; posso escolher minha disponibilidade; posso reabrir reservas quando não puder atender; o histórico operacional pode influenciar minha prioridade futura de reservas; a plataforma não representa escala obrigatória, controle de jornada ou vínculo empregatício; e meus dados poderão ser armazenados para fins operacionais e comprobatórios.</p>`;


const FUNCAO_LABEL={comum:'Parceiro comum',lider:'Líder / ponto focal'};
const LIDERES_PADRAO=['jose henrique pastel','clayton dos santos','renan lopes','reinaldo alves'];
const DIAS=['seg','ter','qua','qui','sex','sab','dom'];
const DIA_LABEL={seg:'Segunda',ter:'Terça',qua:'Quarta',qui:'Quinta',sex:'Sexta',sab:'Sábado',dom:'Domingo'};
const SHORT={seg:'Seg',ter:'Ter',qua:'Qua',qui:'Qui',sex:'Sex',sab:'Sáb',dom:'Dom'};
const STATUS_LABEL={ativo:'Ativo',fila:'Fila de espera',analise:'Em análise',sem_autorizacao:'Sem autorização para reservas',inativo:'Inativo'};
const DEFAULT_CLIENTES=[
 {id:'camila',nome:'Pastel da Camila',endereco:'Avenida Dom Pedro I, 432, Centro, Osasco/SP',telefone:'',grupo:'https://chat.whatsapp.com/Ie2qpJoOhFx6c0nW2acYoJ',ativo:true,cor:'#dc2626',agenda:{seg:[],ter:[{inicio:'10:00',fim:'16:00',vagas:1},{inicio:'16:00',fim:'22:00',vagas:1}],qua:[{inicio:'10:00',fim:'16:00',vagas:1},{inicio:'16:00',fim:'22:00',vagas:1}],qui:[{inicio:'10:00',fim:'16:00',vagas:1},{inicio:'16:00',fim:'22:00',vagas:1}],sex:[{inicio:'10:00',fim:'16:00',vagas:1},{inicio:'16:00',fim:'22:00',vagas:1}],sab:[{inicio:'10:00',fim:'16:00',vagas:1},{inicio:'16:00',fim:'22:00',vagas:1}],dom:[{inicio:'10:00',fim:'16:00',vagas:1},{inicio:'16:00',fim:'22:00',vagas:1}]}},
 {id:'bevenutti',nome:'Pizzaria Bevenutti',endereco:'Rua Damião de Góis, 249, Osasco/SP',telefone:'',grupo:'https://chat.whatsapp.com/CaFE5AiQlCAK8SxDb23WNQ',ativo:true,cor:'#059669',agenda:{seg:[{inicio:'18:00',fim:'00:00',vagas:3}],ter:[{inicio:'18:00',fim:'00:00',vagas:3}],qua:[{inicio:'18:00',fim:'00:00',vagas:4}],qui:[{inicio:'18:00',fim:'00:00',vagas:4}],sex:[{inicio:'18:00',fim:'00:00',vagas:8}],sab:[{inicio:'18:00',fim:'00:00',vagas:8}],dom:[{inicio:'18:00',fim:'00:00',vagas:6}]}},
 {id:'drica',nome:'Pastel da Drica',endereco:'Rua Eduardo Dias, 75, Jardim Roberto, Osasco/SP',telefone:'11 98393-3969',grupo:'',ativo:true,cor:'#f59e0b',agenda:{seg:[{inicio:'18:00',fim:'00:00',vagas:2}],ter:[{inicio:'18:00',fim:'00:00',vagas:2}],qua:[{inicio:'18:00',fim:'00:00',vagas:2}],qui:[{inicio:'18:00',fim:'00:00',vagas:2}],sex:[{inicio:'18:00',fim:'00:00',vagas:3}],sab:[{inicio:'18:00',fim:'00:00',vagas:4}],dom:[{inicio:'18:00',fim:'00:00',vagas:3}]}},
 {id:'meridio',nome:'Meridio Pizza',endereco:'Rua Clarice Lispector, 135, Santa Maria, Osasco/SP',telefone:'',grupo:'',ativo:true,cor:'#2563eb',agenda:{seg:[],ter:[{inicio:'18:00',fim:'00:00',vagas:2}],qua:[{inicio:'18:00',fim:'00:00',vagas:2}],qui:[{inicio:'18:00',fim:'00:00',vagas:2}],sex:[{inicio:'18:00',fim:'00:00',vagas:4}],sab:[{inicio:'18:00',fim:'00:00',vagas:4}],dom:[{inicio:'18:00',fim:'00:00',vagas:6}]}},
 {id:'barto',nome:'Bartô Bar e Restaurante',endereco:'Rua Professora José Azevedo Minhoto, 478, Km 18, Osasco/SP',telefone:'11 97251-0303',grupo:'',ativo:true,cor:'#7c3aed',agenda:{seg:[{inicio:'10:45',fim:'16:45',vagas:1}],ter:[{inicio:'10:45',fim:'16:45',vagas:1}],qua:[{inicio:'10:45',fim:'16:45',vagas:1}],qui:[{inicio:'10:45',fim:'16:45',vagas:1}],sex:[{inicio:'10:45',fim:'16:45',vagas:1}],sab:[{inicio:'10:45',fim:'16:45',vagas:1}],dom:[{inicio:'10:45',fim:'16:45',vagas:1}]}},
 {id:'fratelli',nome:'Fratelli Gourmet',endereco:'Avenida Sarah Veloso, 232, Veloso, Osasco/SP',telefone:'',grupo:'',ativo:true,cor:'#0f766e',agenda:{seg:[{inicio:'17:00',fim:'23:00',vagas:1},{inicio:'18:00',fim:'00:00',vagas:3}],ter:[{inicio:'17:00',fim:'23:00',vagas:1},{inicio:'18:00',fim:'00:00',vagas:3}],qua:[{inicio:'17:00',fim:'23:00',vagas:1},{inicio:'18:00',fim:'00:00',vagas:3}],qui:[{inicio:'17:00',fim:'23:00',vagas:1},{inicio:'18:00',fim:'00:00',vagas:3}],sex:[{inicio:'17:00',fim:'23:00',vagas:1},{inicio:'18:00',fim:'00:00',vagas:3}],sab:[{inicio:'17:00',fim:'23:00',vagas:1},{inicio:'18:00',fim:'00:00',vagas:3}],dom:[{inicio:'17:00',fim:'23:00',vagas:1},{inicio:'18:00',fim:'00:00',vagas:3}]}}
];
const DEFAULT_PARCEIROS=[
 ['Aerkson','Felipe','+5511901638369','11901638369'],['Alessandro','Ignácio de Souza','+5511954058400','11954058400'],['Bruno','Souza','+5511958674595','42229627830'],['Caio','Lassala','+5511978653940','47197087813'],['Clayton','Dos Santos','+5511952059787','45068948802'],['Danilo','de Oliveira Leite','+5511977992256','11951546885'],['Douglas','Nunes Malfatti','+5511981278139','42689714833'],['Felipe','Sousa Rodrigues','+5511976378609','55651465855'],['Gabriel','Marcos','+5511988032185','gm160804@gmail.com'],['Gabriel','Martins Abreu','+5511979878759','55419191857'],['Gabriel','Rocha','+5511948228357','11948228357'],['Guilherme','', '+5511914800666','11914800666'],['Gustavo','Batista','+5511964404766','11964404766'],['Jhonatan','de Souza','+5511956917671','45291559861'],['Jonatas','da Silva Nascimento','+5511967348615',''],['José Henrique','Pastel','+5511978309109','49515800803'],['Kaique Vitor','Cardoso','+5511977065072','11948917688'],['Kleber','Augusto','+5511947939710','4522613878'],['Lucas','de Lima Rossetto','+5511978331566','44628361894'],['Lucas','de Oliveira','+5511983107716',''],['Luiz','Eduardo','+5511970888059','52761896840'],['Matheus','Marciano','+5511955803663','54521366813'],['Reinaldo','Alves','+5511969011741','11969011741'],['Renan','Lopes', '+5511987315940','11939645903'],['Robert Henrique','Dias Ferreira','+5511984062713',''],['Rodnei','Matsuda','+5511961153888','11961153888'],['Roger','Martinelli','+5511919319993','11978776199']
].map(p=>({id:normPhone(p[2]),nome:p[0],sobrenome:p[1],telefone:p[2],pix:p[3],veiculo:'Moto',status:'ativo',funcao:LIDERES_PADRAO.includes(removeAccents((p[0]+' '+p[1]).trim().toLowerCase()))?'lider':'comum',obs:''}));
let clientes=load('clientes',DEFAULT_CLIENTES), parceiros=load('parceiros',DEFAULT_PARCEIROS), reservas=load('reservas',[]), liberacoes=load('liberacoes',[]), desistencias=load('desistencias',[]), emergencias=load('emergencias',[]), aceites=load('aceites',[]), current=null, currentDay='seg', adminTab='quadro', adminDay='seg', adminView='dia', lastClosed={}, adminMode=false;
function load(k,d){try{return JSON.parse(localStorage.getItem('oe_d32_'+k))||structuredClone(d)}catch(e){return structuredClone(d)}}
function save(){localStorage.setItem('oe_d32_clientes',JSON.stringify(clientes));localStorage.setItem('oe_d32_parceiros',JSON.stringify(parceiros));localStorage.setItem('oe_d32_reservas',JSON.stringify(reservas));localStorage.setItem('oe_d32_liberacoes',JSON.stringify(liberacoes));localStorage.setItem('oe_d32_desistencias',JSON.stringify(desistencias));localStorage.setItem('oe_d32_emergencias',JSON.stringify(emergencias));localStorage.setItem('oe_d32_aceites',JSON.stringify(aceites));}
function normPhone(v){return String(v||'').replace(/\D/g,'').replace(/^55/,'');}
function fullName(p){return [p.nome,p.sobrenome].filter(Boolean).join(' ').trim()}
function removeAccents(s){return String(s||'').normalize('NFD').replace(/[̀-ͯ]/g,'')}
function partnerKey(p){return removeAccents(fullName(p).toLowerCase()).replace(/\s+/g,' ').trim()}
function isLeader(p){return !!p && (p.funcao==='lider' || LIDERES_PADRAO.includes(partnerKey(p)))}
function leaderIcon(p){return isLeader(p)?'<span class="leader-crown" title="Líder / ponto focal">👑</span>':''}
function nomeOperacional(p){
  if(!p)return 'Parceiro';
  const nome=String(p.nome||'').trim();
  const parts=String(p.sobrenome||'').trim().split(/\s+/).filter(Boolean);
  if(!parts.length)return nome;
  const primeiroSob=parts[0]||'';
  const ultimo=parts[parts.length-1]||primeiroSob;
  const ignorar=['de','da','do','dos','das'];
  if(parts.length>=2 && !ignorar.includes(primeiroSob.toLowerCase()))return `${nome} ${primeiroSob.charAt(0)}. ${ultimo}`;
  return `${nome} ${ultimo}`.trim();
}
function nomeOperacionalById(id){let p=parceiros.find(x=>x.id===id);return p?nomeOperacional(p):'Parceiro'}
function nomeComCoroa(p){return `${leaderIcon(p)}${esc(nomeOperacional(p))}`}
function fmt(t){return String(t||'').replace(':','H').replace('H00','H')}
function slotId(c,d,i){return c.id+'|'+d+'|'+i}
function findParceiroByPhone(w){let n=normPhone(w);return parceiros.find(p=>normPhone(p.telefone)===n||p.id===n)}
function cliente(id){return clientes.find(c=>c.id===id)}
function parseMin(t){let [h,m]=String(t).split(':').map(Number); if(isNaN(h))return 0; return h*60+(m||0)}
function range(slot){let s=parseMin(slot.inicio), e=parseMin(slot.fim); if(e<=s)e+=1440; return [s,e]}
function overlap(a,b){return a[0]<b[1]&&b[0]<a[1]}
function closeEnough(a,b){return Math.min(Math.abs(a[1]-b[0]),Math.abs(b[1]-a[0]))<30}
function reservationsForSlot(cId,dia,idx){return reservas.filter(r=>r.clienteId===cId&&r.dia===dia&&r.slotIndex===idx&&r.status==='reservado')}
function freeCount(c,dia,idx){let s=c.agenda[dia][idx];return Math.max(0,Number(s.vagas||0)-reservationsForSlot(c.id,dia,idx).length)}

function myReservations(){return current?reservas.filter(r=>r.parceiroId===current.id&&r.status==='reservado'):[]}

/* D3.6 — Regra de desistência responsável
   Conta desistências por DIA diferente. Se o parceiro reabrir reservas em 3 dias diferentes,
   o sistema coloca o cadastro em "Sem autorização para reservas". Só a gestão pode reativar.
   Não usar linguagem de punição/falta; usar revisão operacional e histórico de disponibilidade. */
function partnerReopenDays(parceiroId){return [...new Set(desistencias.filter(d=>d.parceiroId===parceiroId).map(d=>d.dia))]}
function partnerReopenCount(parceiroId){return partnerReopenDays(parceiroId).length}
function willCountNewDay(parceiroId,dia){return !partnerReopenDays(parceiroId).includes(dia)}
function recordDesistencia(reserva,c,slot){
  if(!reserva)return {count:partnerReopenCount(current.id),blocked:false,newDay:false};
  let exists=desistencias.some(d=>d.reservaId===reserva.id);
  if(!exists){
    desistencias.push({id:'ds_'+Date.now(),reservaId:reserva.id,parceiroId:reserva.parceiroId,clienteId:reserva.clienteId,dia:reserva.dia,slotIndex:reserva.slotIndex,inicio:slot?.inicio||'',fim:slot?.fim||'',createdAt:new Date().toISOString()});
  }
  let count=partnerReopenCount(reserva.parceiroId),blocked=false;
  if(count>=3){
    let p=parceiros.find(x=>x.id===reserva.parceiroId);
    if(p && p.status==='ativo'){
      p.status='sem_autorizacao';
      p.obs=((p.obs||'')+'\nCadastro colocado em revisão operacional automaticamente após 3 dias diferentes com reabertura de reserva.').trim();
      p.autoBloqueadoEm=new Date().toISOString();
      blocked=true;
    }
  }
  return {count,blocked,newDay:true};
}
function desistenciasDoClienteDia(cId,dia){return desistencias.filter(d=>d.clienteId===cId&&d.dia===dia)}
function montarMensagemUrgencia(c,dia,slot,parceiro,score){
  const versoes=[
`🚨 VAGA REABERTA AGORA 🚨\n\nCliente: ${c.nome}\nDia: ${DIA_LABEL[dia]}\nHorário: ${fmt(slot.inicio)} às ${fmt(slot.fim)}\nParceiro que reabriu: ${nomeOperacional(parceiro)}\n\nTime, isso é operação real. Quando uma vaga abre, o problema é da empresa e a resposta é do nosso time inteiro.\n\nPlano de ação:\n1️⃣ Acionar fila de espera\n2️⃣ Chamar leads de hoje\n3️⃣ Chamar leads da semana\n4️⃣ Postar nos grupos\n5️⃣ Subir nos stories\n6️⃣ Jogar nos grupos do Facebook\n7️⃣ Confirmar alguém o mais rápido possível\n\nNós somos fortes porque resolvemos rápido. Bora salvar a operação. 🏍️🔥`,
`⚠️ OPERAÇÃO EM ALERTA ⚠️\n\nAbriu vaga na ${c.nome}\n${DIA_LABEL[dia]} · ${fmt(slot.inicio)} às ${fmt(slot.fim)}\n\nLiderança não espera o problema crescer. Aciona rede, chama contato, puxa fila de espera e ajuda a fechar a vaga.\n\nA Osasco Express vai dominar Osasco no detalhe: uma vaga resolvida por vez. Quem consegue ajudar agora? 🚀🏍️`,
`🔥 CHAMADO DE TIME 🔥\n\nVaga reaberta: ${c.nome}\n${DIA_LABEL[dia]} · ${fmt(slot.inicio)} às ${fmt(slot.fim)}\n\nSe não tem parceiro para cobrir, a solução também passa pela nossa rede. Todo mundo que tem contato bom, lead quente ou parceiro disponível precisa se mexer agora.\n\nNois é operação. Nois resolve. Bora preencher essa vaga. 🏁`
  ];
  let i=Number(localStorage.getItem('oe_d32_msg_urgencia_idx')||0);localStorage.setItem('oe_d32_msg_urgencia_idx',String(i+1));return versoes[i%versoes.length];
}
function copyText(txt){try{navigator.clipboard&&navigator.clipboard.writeText(txt)}catch(e){} }

function checkConflict(c,dia,idx){let s=c.agenda[dia][idx], rg=range(s); for(const r of myReservations()){if(r.dia!==dia)continue;let c2=cliente(r.clienteId); if(!c2)continue;let s2=c2.agenda[dia]?.[r.slotIndex]; if(!s2)continue;let rg2=range(s2); if(overlap(rg,rg2))return {type:'overlap',r,cliente:c2,slot:s2}; if(c2.id!==c.id && closeEnough(rg,rg2))return {type:'intervalo',r,cliente:c2,slot:s2};}return null}
function hasFocalException(parceiroId,cId,dia,idx){return liberacoes.some(x=>x.ativo!==false&&x.parceiroId===parceiroId&&x.clienteId===cId&&x.dia===dia&&Number(x.slotIndex)===Number(idx))}
function checkFocalConflict(c,dia,idx,p=current){
  if(!isLeader(p) || hasFocalException(p.id,c.id,dia,idx))return null;
  const rr=reservationsForSlot(c.id,dia,idx).filter(r=>r.parceiroId!==p.id);
  const other=rr.map(r=>parceiros.find(x=>x.id===r.parceiroId)).find(isLeader);
  return other?{type:'ponto_focal',parceiro:other,cliente:c,dia,slot:c.agenda[dia][idx]}:null;
}
function app(html){document.getElementById('app').innerHTML=html;window.scrollTo({top:0,behavior:'smooth'})}
function showHome(){
  // D3.6.3 BETA — Entrada por perfil simples. Regra: esta tela é apenas um filtro de acesso.
  // Parceiro segue para WhatsApp. Gestão segue para senha e quadro. Não misturar fluxos.
  adminMode=false;current=null;
  app(`<section class="hero"><span class="safe-note">Reserva OE · Beta operacional</span><h2>Reserva OE</h2><p>Plataforma da Osasco Express para reservas operacionais, disponibilidade e acompanhamento da operação.</p><div class="profile-entry"><button class="profile-card partner" onclick="showPartnerEntry()"><div class="profile-icon">🏍️</div><h3>Sou parceiro</h3><p>Reservar horários disponíveis, consultar minhas reservas e reabrir horário se precisar.</p><span class="profile-action">Entrar como parceiro</span></button><button class="profile-card admin" onclick="openAdminLogin()"><div class="profile-icon">🛡️</div><h3>Sou suporte / gestão</h3><p>Acompanhar quadro operacional, clientes, parceiros, vagas e alertas de emergência.</p><span class="profile-action">Entrar na gestão</span></button></div><div class="beta-note"><b>Regra de segurança:</b> o acesso da gestão não passa pela tela de WhatsApp do parceiro. O aceite digital é exigido antes da primeira reserva e o plano de urgência fica somente na gestão.</div></section>`)
}

/* BETA D3.6.3.3 — Máscara e validação de celular
   Regra: celular precisa ter DDD + 9 dígitos. Nome e sobrenome são obrigatórios para evitar reservas sem identificação operacional. */
function formatPhoneBR(value){
  let n=String(value||'').replace(/\D/g,'').replace(/^55/,'').slice(0,11);
  if(n.length<=2)return n;
  if(n.length<=7)return `(${n.slice(0,2)}) ${n.slice(2)}`;
  return `(${n.slice(0,2)}) ${n.slice(2,7)}-${n.slice(7)}`;
}
function maskPhoneInput(el){if(!el)return;el.value=formatPhoneBR(el.value)}
function isValidMobilePhone(value){let n=normPhone(value);return /^\d{2}9\d{8}$/.test(n)}
function setFieldError(id,msg){let input=document.getElementById(id);let err=document.getElementById(id+'_err');if(input)input.classList.toggle('invalid',!!msg);if(err)err.textContent=msg||'';return !msg}
function validatePartnerPhone(id='phone'){
  let value=v(id);let n=normPhone(value);
  if(!n)return setFieldError(id,'Informe o WhatsApp com DDD.');
  if(!isValidMobilePhone(value))return setFieldError(id,'Digite um celular válido com DDD e 9 dígitos. Ex: (11) 99999-9999.');
  setFieldError(id,'');return true;
}
function validNamePart(x){return String(x||'').trim().replace(/\s+/g,' ').length>=2}

function showPartnerEntry(){
  // Fluxo exclusivo do parceiro: WhatsApp → horários → reservas → reabertura.
  adminMode=false;current=null;
  app(`<section class="hero"><div class="section-head"><button class="ghost" onclick="showHome()">← Voltar</button><div><h2>Entrar como parceiro</h2><p>Informe seu WhatsApp para acessar a Reserva OE, ver horários disponíveis, reservar sua disponibilidade e consultar suas reservas.</p></div></div><div class="field"><label>WhatsApp <span class="required-mark">*</span></label><input class="input" id="phone" inputmode="tel" autocomplete="tel" maxlength="15" placeholder="(11) 99999-9999" oninput="maskPhoneInput(this);setFieldError('phone','')" onkeydown="if(event.key==='Enter')continuePhone()"><div class="input-help">Use celular com DDD. Exemplo: (11) 99999-9999.</div><div class="validation-error" id="phone_err"></div></div><div class="actions"><button class="primary" onclick="continuePhone()">Continuar</button></div><p class="tiny">A Reserva OE organiza oportunidades de prestação de serviço autônomo. Você escolhe os horários conforme sua disponibilidade.</p></section>`);
  setTimeout(()=>document.getElementById('phone')?.focus(),100)
}
function continuePhone(){
  if(!validatePartnerPhone('phone'))return;
  let p=document.getElementById('phone').value;let found=findParceiroByPhone(p);
  if(!found){showQuickRegister(p);return}
  if(found.status!=='ativo'){showNoAccess(found);return}
  openIdentity(found)
}
function showQuickRegister(phone){
  const masked=formatPhoneBR(phone||'');
  app(`<section class="hero"><div class="section-head"><button class="ghost" onclick="showPartnerEntry()">← Voltar</button><div><h2>Novo cadastro rápido</h2><p>Preencha nome, sobrenome e WhatsApp para continuar na agenda.</p></div></div><div class="form-grid"><div class="field"><label>Nome <span class="required-mark">*</span></label><input class="input" id="newNome" autocomplete="given-name" placeholder="Ex: Bruna" oninput="setFieldError('newNome','')"><div class="validation-error" id="newNome_err"></div></div><div class="field"><label>Sobrenome <span class="required-mark">*</span></label><input class="input" id="newSobrenome" autocomplete="family-name" placeholder="Ex: Funari" oninput="setFieldError('newSobrenome','')"><div class="validation-error" id="newSobrenome_err"></div></div><div class="field"><label>WhatsApp <span class="required-mark">*</span></label><input class="input" id="newPhone" inputmode="tel" autocomplete="tel" maxlength="15" value="${esc(masked)}" oninput="maskPhoneInput(this);setFieldError('newPhone','')"><div class="input-help">Parceiros novos sem histórico negativo entram como Ativo.</div><div class="validation-error" id="newPhone_err"></div></div></div><div class="actions"><button class="primary" onclick="saveQuickRegister()">Salvar cadastro e continuar</button><button class="secondary" onclick="showPartnerEntry()">Voltar</button></div></section>`);
  setTimeout(()=>document.getElementById('newNome')?.focus(),80)
}
function saveQuickRegister(){
  let nome=v('newNome'),sobrenome=v('newSobrenome'),telefone=v('newPhone');
  let ok=true;
  if(!validNamePart(nome))ok=setFieldError('newNome','Nome é obrigatório.')&&ok; else setFieldError('newNome','');
  if(!validNamePart(sobrenome))ok=setFieldError('newSobrenome','Sobrenome é obrigatório para evitar nomes duplicados.')&&ok; else setFieldError('newSobrenome','');
  if(!validatePartnerPhone('newPhone'))ok=false;
  const id=normPhone(telefone);
  const existente=parceiros.find(p=>p.id===id||normPhone(p.telefone)===id);
  if(existente){current=existente;save();showSchedule();return}
  if(!ok)return;
  let p={id,nome:nome.trim(),sobrenome:sobrenome.trim(),telefone:formatPhoneBR(telefone),pix:'',veiculo:'Moto',status:'ativo',funcao:'comum',obs:''};
  parceiros.push(p); save(); current=p; showTermAcceptance()
}

/* BETA D3.6.3.7 — Aceite digital Reserva OE
   Regra: nenhum parceiro acessa reservas sem aceitar a versão vigente do termo.
   O registro local contém versão do termo, data/hora, WhatsApp, nome, sobrenome, declaração aceita e dados do navegador.
   Drive: o registro fica com status pendente até configurar TERM_ACCEPT_ENDPOINT com Google Apps Script. */
function hasAcceptedCurrentTerm(p){
  if(!p)return false;
  return aceites.some(a=>a.parceiroId===p.id && a.versaoTermo===TERM_VERSION && a.status==='aceito');
}
function enterPartnerWithAcceptance(id){
  current=parceiros.find(x=>x.id===id);
  closeModal();
  showTermAcceptance();
}
function showTermAcceptance(){
  if(!current){showPartnerEntry();return}
  if(hasAcceptedCurrentTerm(current)){showSchedule();return}
  const nome=esc(fullName(current));
  modal(`<div class="modal-title"><h3>${TERM_TITLE}</h3><button class="close-x" onclick="closeModal();showPartnerEntry()">×</button></div><div class="modal-body"><p><b>${nome}</b></p><p>Para continuar na <b>Reserva OE</b>, confirme que teve acesso ao termo completo de uso e ciência da plataforma.</p><div class="tech-note"><b>Resumo:</b> a Reserva OE organiza disponibilidade e reservas operacionais. Você escolhe livremente se deseja reservar horários. Ao confirmar uma reserva, o horário fica separado para você. Se não puder atender, pode reabrir a reserva pelo sistema para que o suporte reorganize a operação.</div><details class="term-details" open><summary>Ver termo completo de aceite digital</summary><div class="term-text"><p><b>OSASCO EXPRESS SERVIÇOS LTDA – ME</b><br>CNPJ: <b>54.707.097/0001-04</b><br>Endereço: Av. Diogo Antônio Feijó, 855, Osasco/SP</p>${TERM_FULL_HTML}</div></details><label class="checkline"><input type="checkbox" id="termoAceiteCheck"><span>Declaro que tive acesso ao Termo de Uso da Reserva OE, compreendi que a reserva de horários é voluntária e aceito continuar utilizando a plataforma.</span></label><p class="tiny">Ao continuar, seu aceite será registrado eletronicamente com data, hora, WhatsApp, versão do termo, texto integral aceito e dados técnicos do acesso. Para arquivamento automático no Drive, configurar o Google Apps Script da pasta informada no projeto.</p></div><div class="actions"><button class="secondary" onclick="closeModal();showPartnerEntry()">Voltar</button><button class="primary" onclick="acceptTermAndContinue()">Aceitar e continuar</button></div>`)
}
function acceptTermAndContinue(){
  if(!document.getElementById('termoAceiteCheck')?.checked){alert('Marque o aceite para continuar.');return}
  if(!current){closeModal();showPartnerEntry();return}
  const acceptedAt=new Date().toISOString();
  const registro={
    id:'ac_'+Date.now(),tipo:'aceite_digital_reserva_oe',versaoTermo:TERM_VERSION,titulo:TERM_TITLE,termoIntegralAceito:TERM_FULL_TEXT,
    empresa:'Osasco Express Serviços Ltda - ME',cnpj:'54.707.097/0001-04',parceiroId:current.id,
    nome:current.nome||'',sobrenome:current.sobrenome||'',whatsapp:current.telefone||'',dataHoraAceite:acceptedAt,
    declaracaoAceita:'Declaro que tive acesso ao Termo de Uso da Reserva OE, compreendi que a reserva de horários é voluntária e aceito continuar utilizando a plataforma.',
    origem:'tela_parceiro_reserva_oe',status:'aceito',userAgent:navigator.userAgent||'',idioma:navigator.language||'',driveFolderId:DRIVE_FOLDER_ID,
    syncStatus:TERM_ACCEPT_ENDPOINT?'pendente_envio':'pendente_configuracao_drive',
    docVersion:APP_VERSION, appBuild:APP_BUILD
  };
  aceites.push(registro);save();syncAceiteToDrive(registro);closeModal();showSchedule();
}
function syncAceiteToDrive(registro){
  if(!TERM_ACCEPT_ENDPOINT)return;
  try{
    fetch(TERM_ACCEPT_ENDPOINT,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/json'},body:JSON.stringify(registro)})
      .then(()=>{const a=aceites.find(x=>x.id===registro.id);if(a){a.syncStatus='enviado_ou_enfileirado';a.syncTriedAt=new Date().toISOString();save();}})
      .catch(()=>{const a=aceites.find(x=>x.id===registro.id);if(a){a.syncStatus='erro_envio';a.syncTriedAt=new Date().toISOString();save();}});
  }catch(e){const a=aceites.find(x=>x.id===registro.id);if(a){a.syncStatus='erro_envio';a.syncError=String(e.message||e);save();}}
}
function exportAceites(){
  const payload={version:APP_VERSION,termVersion:TERM_VERSION,exportedAt:new Date().toISOString(),aceites};
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='aceites-reserva-oe-'+TERM_VERSION+'.json';a.click();URL.revokeObjectURL(a.href);
}
function renderAdminAceites(){
  const ordenados=[...(aceites||[])].sort((a,b)=>String(b.dataHoraAceite||'').localeCompare(String(a.dataHoraAceite||'')));
  const lista=ordenados.map(a=>`<article class="partner-card"><div class="admin-top"><div><h3>${esc([a.nome,a.sobrenome].filter(Boolean).join(' '))}</h3><p class="muted">WhatsApp: ${esc(a.whatsapp||'')}</p><p><b>Versão:</b> ${esc(a.versaoTermo||'')}</p><p><b>Data/hora:</b> ${esc(formatDateTime(a.dataHoraAceite))}</p><p class="tiny">Status Drive: ${esc(a.syncStatus||'local')}</p></div><span class="tag green">Aceito</span></div></article>`).join('')||empty('Nenhum aceite registrado','Quando o parceiro aceitar o termo da Reserva OE, o comprovante aparecerá aqui.','');
  document.getElementById('adminPanel').innerHTML=`<div class="admin-card"><div class="admin-top"><div class="admin-title"><h2>Aceites digitais</h2><p>Comprovantes de ciência e uso da Reserva OE. O arquivamento automático no Drive exige configurar o endpoint do Google Apps Script.</p></div><button class="primary" onclick="exportAceites()">Exportar aceites JSON</button></div><div class="admin-safe-note"><b>Pasta Drive prevista:</b> ${DRIVE_FOLDER_ID}<br><b>Termo vigente:</b> ${TERM_VERSION}</div></div>${lista}`;
}
function formatDateTime(iso){try{return new Date(iso).toLocaleString('pt-BR')}catch(e){return iso||''}}

function openIdentity(p){modal(`<div class="modal-title"><h3>Encontramos seu cadastro</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="modal-body"><b>${fullName(p)}</b><br><span class="muted">WhatsApp: ${p.telefone}</span><p>Confirme se é você para continuar.</p></div><div class="actions"><button class="primary" onclick="enterPartnerWithAcceptance('${p.id}')">Sou eu</button><button class="secondary" onclick="closeModal();showHome();">Trocar WhatsApp</button></div>`)}
function showNoAccess(p){modal(`<div class="modal-title"><h3>Seu cadastro precisa de análise</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="modal-body"><p>No momento, este login não está liberado para novas reservas.</p><p>Isso pode acontecer por atualização cadastral, revisão operacional ou histórico de disponibilidade.</p><p>Para falar com a Osasco Express e solicitar análise, chame o SAC: <b>(11) 98666-1784</b></p></div><div class="actions"><button class="primary" onclick="window.open('${SAC_URL}','_blank')">Chamar SAC</button><button class="secondary" onclick="closeModal();showPartnerEntry();">Voltar</button></div>`)}
function dayTabs(fn='selectDay',active=currentDay){return `<div class="chips">${DIAS.map(d=>`<button class="chip ${d===active?'active':''}" onclick="${fn}('${d}')">${SHORT[d]}</button>`).join('')}</div>`}
function selectDay(d){currentDay=d;showSchedule()}
function showSchedule(){
  if(!current){ if(adminMode){showAdmin(adminTab);return} showHome();return}
  let cards=[];
  clientes.filter(c=>c.ativo).forEach(c=>{
    let slots=c.agenda[currentDay]||[];
    if(slots.length){slots.forEach((s,idx)=>cards.push(renderScheduleCard(c,currentDay,idx)))}
    else{cards.push(renderClosedClientCard(c,currentDay))}
  });
  app(`<div class="section-head"><button class="ghost" onclick="showHome()">← Início</button><div><h2>Olá, ${current.nome}</h2><p>Escolha seus horários disponíveis. Todos os clientes aparecem; quando não houver horário no dia, o card informa sem esconder.</p></div></div>${dayTabs()}<div class="grid">${cards.join('')||empty('Sem horários disponíveis','Não há clientes ativos cadastrados.','')}</div>`)
}
function renderClosedClientCard(c,dia){return `<article class="schedule-card disabled"><div class="card-top"><span class="client-dot" style="background:${c.cor}"></span><div><div class="client-name">${c.nome}</div><div class="addr">${c.endereco||''}</div></div></div><div class="time">Sem horário</div><span class="status-pill pill-full">Sem vagas em ${DIA_LABEL[dia]}</span><div class="card-actions"><button class="secondary" disabled>Indisponível neste dia</button></div></article>`}
function renderScheduleCard(c,dia,idx){let s=c.agenda[dia][idx], free=freeCount(c,dia,idx), mine=myReservations().some(r=>r.clienteId===c.id&&r.dia===dia&&r.slotIndex===idx);let conflict=checkConflict(c,dia,idx), focal=checkFocalConflict(c,dia,idx);let status= mine?`<span class="status-pill pill-mine">Reservado por você</span>`: free<=0?`<span class="status-pill pill-full">Horário preenchido</span>`: focal?`<span class="status-pill pill-conflict">Ponto com líder reservado</span>`: conflict?`<span class="status-pill pill-conflict">Conflito com outra reserva</span>`:`<span class="status-pill pill-free">${free} ${free===1?'vaga livre':'vagas livres'}</span>`;let btn= mine?`<button class="secondary" onclick="openReopen('${c.id}','${dia}',${idx})">Reabrir horário</button>`:free<=0?`<button class="secondary" disabled>Preenchido</button>`:focal?`<button class="secondary" onclick="showFocalConflict('${c.id}','${dia}',${idx})">Ver regra</button>`:conflict?`<button class="secondary" onclick="showConflict('${c.id}','${dia}',${idx})">Ver conflito</button>`:`<button class="primary" onclick="openConfirmReservation('${c.id}','${dia}',${idx})">Reservar horário</button>`;return `<article class="schedule-card"><div class="card-top"><span class="client-dot" style="background:${c.cor}"></span><div><div class="client-name">${c.nome}</div><div class="addr">${c.endereco||''}</div></div></div><div class="time">${fmt(s.inicio)} às ${fmt(s.fim)}</div>${status}<div class="card-actions">${btn}</div></article>`}
function openConfirmReservation(cId,dia,idx){
  let c=cliente(cId),s=c.agenda[dia][idx],free=freeCount(c,dia,idx);
  modal(`<div class="modal-title"><h3>Como deseja reservar?</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="modal-body"><b>${c.nome}</b><br>${DIA_LABEL[dia]} · ${fmt(s.inicio)} às ${fmt(s.fim)}<p>Há <b>${free}</b> ${free===1?'vaga disponível':'vagas disponíveis'} neste horário.</p><p>Você pode reservar apenas este dia ou repetir esta disponibilidade nos outros dias da semana em que houver o mesmo horário livre.</p><p class="tiny">Antes de confirmar a semana, você revisa cada dia. Conflitos e dias sem vaga ficam desmarcados automaticamente.</p></div><div class="actions"><button class="primary" onclick="openSingleReservationConfirm('${cId}','${dia}',${idx})">Somente ${DIA_LABEL[dia]}</button><button class="secondary" onclick="openWeeklyReservationReview('${cId}','${dia}',${idx})">Repetir nos dias disponíveis da semana</button><button class="secondary" onclick="closeModal()">Voltar</button></div>`)
}
function responsabilidadeTexto(){return `<p>Ao reservar, este horário fica separado para você. Se não puder atender, reabra a vaga com antecedência para o suporte chamar outro parceiro.</p><p>Quando uma reserva é abandonada ou reaberta em cima da hora, o cadastro pode sair da prioridade de horários recorrentes e entrar na fila de espera operacional.</p>`}
function openSingleReservationConfirm(cId,dia,idx){let c=cliente(cId),s=c.agenda[dia][idx],free=freeCount(c,dia,idx);modal(`<div class="modal-title"><h3>Confirmar reserva</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="modal-body"><b>${c.nome}</b><br>${DIA_LABEL[dia]} · ${fmt(s.inicio)} às ${fmt(s.fim)}<p>Há <b>${free}</b> ${free===1?'vaga disponível':'vagas disponíveis'} neste horário.</p>${responsabilidadeTexto()}<label class="checkline"><input type="checkbox" id="responsavel"><span>Entendi e confirmo minha disponibilidade para este horário.</span></label></div><div class="actions"><button class="secondary" onclick="openConfirmReservation('${cId}','${dia}',${idx})">Voltar</button><button class="primary" onclick="confirmReservation('${cId}','${dia}',${idx})">Confirmar reserva</button></div>`)}
function findSlotBySameTime(c,dia,baseSlot){let arr=c.agenda[dia]||[];return arr.findIndex(s=>cleanTime(s.inicio)===cleanTime(baseSlot.inicio)&&cleanTime(s.fim)===cleanTime(baseSlot.fim))}
function weeklyAvailability(cId,baseDia,baseIdx){
  let c=cliente(cId),base=c.agenda[baseDia][baseIdx];
  return DIAS.map(d=>{
    let idx=findSlotBySameTime(c,d,base),item={dia:d,idx,available:false,checked:false,status:'Sem este horário',kind:'bad'};
    if(idx<0)return item;
    if(myReservations().some(r=>r.clienteId===cId&&r.dia===d&&r.slotIndex===idx)){return {...item,status:'Já reservado por você',kind:'warn'}}
    let free=freeCount(c,d,idx); if(free<=0)return {...item,status:'Sem vaga livre',kind:'bad'};
    let conf=checkConflict(c,d,idx); if(conf)return {...item,status:'Conflito com outra reserva',kind:'warn'};
    let focal=checkFocalConflict(c,d,idx); if(focal)return {...item,status:'Ponto com líder reservado',kind:'warn'};
    return {...item,available:true,checked:true,status:`${free} ${free===1?'vaga livre':'vagas livres'}`,kind:'ok'};
  })
}
function openWeeklyReservationReview(cId,dia,idx){
  let c=cliente(cId),s=c.agenda[dia][idx],items=weeklyAvailability(cId,dia,idx);
  let rows=items.map(it=>`<label class="week-day-row ${it.available?'':'off'}"><div class="week-day-main"><input type="checkbox" class="weekDayCheck" data-dia="${it.dia}" data-idx="${it.idx}" ${it.checked?'checked':''} ${it.available?'':'disabled'}><b>${SHORT[it.dia]}</b><div class="week-day-info">${DIA_LABEL[it.dia]}<br>${it.idx>=0?`${fmt(s.inicio)} às ${fmt(s.fim)}`:'horário não cadastrado'}</div></div><span class="week-day-status ${it.kind}">${it.status}</span></label>`).join('');
  let ok=items.filter(x=>x.available).length;
  modal(`<div class="modal-title"><h3>Reservar na semana</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="modal-body"><b>${c.nome}</b><br>${fmt(s.inicio)} às ${fmt(s.fim)}<p>Selecione os dias em que você confirma sua disponibilidade.</p><div class="week-review">${rows}</div><div class="week-result"><b>${ok}</b> ${ok===1?'dia disponível':'dias disponíveis'} para esta reserva semanal. Dias com conflito, sem vaga ou sem horário ficam bloqueados automaticamente.</div>${responsabilidadeTexto()}<label class="checkline"><input type="checkbox" id="responsavelSemana"><span>Entendi e confirmo minha disponibilidade nos dias selecionados.</span></label></div><div class="actions"><button class="secondary" onclick="openConfirmReservation('${cId}','${dia}',${idx})">Voltar</button><button class="primary" onclick="confirmWeeklyReservation('${cId}','${dia}',${idx})" ${ok?'':'disabled'}>Confirmar reservas selecionadas</button></div>`)
}
function confirmReservation(cId,dia,idx){if(!document.getElementById('responsavel')?.checked){alert('Confirme que entendeu a responsabilidade da reserva.');return}let c=cliente(cId);if(freeCount(c,dia,idx)<=0){closeModal();showSchedule();return}let conf=checkConflict(c,dia,idx);if(conf){closeModal();showConflict(cId,dia,idx);return}let focal=checkFocalConflict(c,dia,idx);if(focal){closeModal();showFocalConflict(cId,dia,idx);return}reservas.push({id:'r'+Date.now(),parceiroId:current.id,clienteId:cId,dia,slotIndex:idx,status:'reservado',cobriu:false,createdAt:new Date().toISOString(),aceite:'D3.5',origem:'dia'});save();closeModal();showReservationDone(cId,dia,idx);checkClosed(cId,dia);}
function confirmWeeklyReservation(cId,baseDia,baseIdx){
  if(!document.getElementById('responsavelSemana')?.checked){alert('Confirme que entendeu a responsabilidade da reserva semanal.');return}
  let c=cliente(cId),selecionados=[...document.querySelectorAll('.weekDayCheck:checked')].map(x=>({dia:x.dataset.dia,idx:Number(x.dataset.idx)}));
  if(!selecionados.length){alert('Selecione pelo menos um dia disponível.');return}
  let lote='sem_'+Date.now(),salvos=[],bloqueados=[];
  selecionados.forEach(item=>{
    if(item.idx<0){bloqueados.push({dia:item.dia,motivo:'sem horário'});return}
    if(freeCount(c,item.dia,item.idx)<=0){bloqueados.push({dia:item.dia,motivo:'sem vaga'});return}
    if(checkConflict(c,item.dia,item.idx)){bloqueados.push({dia:item.dia,motivo:'conflito'});return}
    if(checkFocalConflict(c,item.dia,item.idx)){bloqueados.push({dia:item.dia,motivo:'líder no ponto'});return}
    reservas.push({id:'r'+Date.now()+'_'+item.dia,parceiroId:current.id,clienteId:cId,dia:item.dia,slotIndex:item.idx,status:'reservado',cobriu:false,createdAt:new Date().toISOString(),aceite:'D3.5',origem:'semanal',loteId:lote});
    salvos.push(item);
  });
  save(); closeModal();
  salvos.forEach(item=>checkClosed(cId,item.dia));
  showWeeklyDone(cId,salvos,bloqueados);
}
function showReservationDone(cId,dia,idx){let c=cliente(cId),s=c.agenda[dia][idx];modal(`<div class="modal-title"><h3>Reserva confirmada</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="modal-body"><b>${c.nome}</b><br>${DIA_LABEL[dia]} · ${fmt(s.inicio)} às ${fmt(s.fim)}<p>Esse horário agora aparece em Minhas reservas.</p></div><div class="actions"><button class="primary" onclick="closeModal();showMyReservations()">Ver minhas reservas</button><button class="secondary" onclick="closeModal();showSchedule()">Reservar outro horário</button></div>`)}
function showWeeklyDone(cId,salvos,bloqueados){let c=cliente(cId);let dias=salvos.map(x=>`<span class="day-mini ok">${SHORT[x.dia]}</span>`).join('');let fora=bloqueados.map(x=>`<span class="day-mini warn">${SHORT[x.dia]} · ${x.motivo}</span>`).join('');modal(`<div class="modal-title"><h3>Reservas da semana confirmadas</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="modal-body"><b>${c.nome}</b><p>Confirmamos <b>${salvos.length}</b> ${salvos.length===1?'dia':'dias'} para você.</p><div class="days-inline">${dias}</div>${fora?`<p class="tiny">Alguns dias ficaram de fora porque não estavam disponíveis:</p><div class="days-inline">${fora}</div>`:''}<p>Você pode reabrir um dia específico em Minhas reservas se surgir imprevisto.</p></div><div class="actions"><button class="primary" onclick="closeModal();showMyReservations()">Ver minhas reservas</button><button class="secondary" onclick="closeModal();showSchedule()">Reservar outro horário</button></div>`)}
function showConflict(cId,dia,idx){let c=cliente(cId),conf=checkConflict(c,dia,idx);let txt=conf?`Você já tem uma reserva neste período:<br><b>${conf.cliente.nome}</b><br>${DIA_LABEL[conf.r.dia]} · ${fmt(conf.slot.inicio)} às ${fmt(conf.slot.fim)}`:'Escolha outro horário disponível.';modal(`<div class="modal-title"><h3>Horário em conflito</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="modal-body"><p>${txt}</p><p>Escolha outro horário disponível para evitar sobreposição ou deslocamento sem intervalo.</p></div><div class="actions"><button class="primary" onclick="closeModal();showSchedule()">Ver outros horários</button></div>`)}
function showFocalConflict(cId,dia,idx){let c=cliente(cId),f=checkFocalConflict(c,dia,idx);let nome=f?nomeOperacional(f.parceiro):'outro líder';modal(`<div class="modal-title"><h3>Horário indisponível para este perfil</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="modal-body"><p>Este ponto já possui um líder reservado neste horário: <b>${esc(nome)}</b>.</p><p>Escolha outro horário disponível ou fale com o suporte para análise.</p><p class="tiny">Somente a gestão pode liberar exceção operacional para dois líderes no mesmo ponto e horário.</p></div><div class="actions"><button class="primary" onclick="closeModal();showSchedule()">Ver outros horários</button><button class="secondary" onclick="window.open('${SUPORTE_URL}','_blank')">Falar com suporte</button></div>`)}
function showMyReservations(){
  if(adminMode){showAdmin(adminTab);return}
  if(!current){showHome();return}
  let mine=myReservations();
  let html=`<div class="section-head"><button class="ghost" onclick="showSchedule()">← Voltar</button><div><h2>Minhas reservas</h2><p>Consulte ou reabra horários se surgir imprevisto.</p></div></div>`;
  if(!mine.length){
    html+=empty('Você ainda não reservou nenhum horário nesta semana.','Escolha um horário disponível para participar da agenda.','<button class="primary" onclick="showSchedule()">Ver horários disponíveis</button><button class="secondary" onclick="showHome()">Voltar ao início</button>')
  }else{
    let groups={};
    mine.forEach(r=>{let c=cliente(r.clienteId); if(!c)return; let s=c.agenda[r.dia]?.[r.slotIndex]; if(!s)return; let key=[c.id,cleanTime(s.inicio),cleanTime(s.fim)].join('|'); (groups[key]||(groups[key]={cliente:c,slot:s,items:[]})).items.push(r)});
    html+=`<div class="grid">`+Object.values(groups).map(g=>{
      let sorted=g.items.sort((a,b)=>DIAS.indexOf(a.dia)-DIAS.indexOf(b.dia));
      let dias=sorted.map(r=>`<span class="day-mini ok">${SHORT[r.dia]}</span>`).join('');
      let linhas=sorted.map(r=>`<div class="reservation-day-line"><b>${DIA_LABEL[r.dia]}</b><button class="secondary" onclick="openReopen('${g.cliente.id}','${r.dia}',${r.slotIndex})">Reabrir este dia</button></div>`).join('');
      return `<article class="schedule-card"><div class="client-name">${g.cliente.nome}</div><div class="time">${fmt(g.slot.inicio)} às ${fmt(g.slot.fim)}</div><span class="status-pill pill-mine">${sorted.length>1?'Reserva semanal':'Reservado por você'}</span><div class="days-inline">${dias}</div><div class="reservation-days">${linhas}</div></article>`
    }).join('')+`</div>`
  }
  app(html)
}
function openReopen(cId,dia,idx){
  let c=cliente(cId),s=c.agenda[dia][idx];
  let count=partnerReopenCount(current.id),newDay=willCountNewDay(current.id,dia),next=count+(newDay?1:0);
  let aviso= next>=3
    ? `<div class="blocked-box"><b>Atenção importante</b><br>Esta será a 3ª data diferente com reabertura. Após confirmar, seu cadastro entra automaticamente em revisão operacional e novas reservas ficam indisponíveis até liberação da gestão.</div>`
    : `<div class="warning-box"><b>Antes de reabrir</b><br>Reabrir horário é permitido, mas não é bom para seu histórico de disponibilidade nem para o relacionamento com o cliente. Reabra com antecedência sempre que precisar. Seu histórico atual tem <b>${count}</b> ${count===1?'data com reabertura':'datas com reabertura'}${newDay?`. Com esta ação, passará para <b>${next}</b>.`:'. Esta reabertura é no mesmo dia já registrado.'}</div>`;
  modal(`<div class="modal-title"><h3>Reabrir este horário?</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="modal-body"><b>${c.nome}</b><br>${DIA_LABEL[dia]} · ${fmt(s.inicio)} às ${fmt(s.fim)}<p>Ao confirmar, a vaga volta para a agenda e o suporte entra em modo de urgência para cobrir a operação.</p>${aviso}</div><div class="actions"><button class="secondary" onclick="closeModal()">Voltar</button><button class="danger" onclick="confirmReopen('${cId}','${dia}',${idx})">Sim, reabrir horário</button></div>`)
}
function confirmReopen(cId,dia,idx){
  /* D3.6.2 — separação de responsabilidade:
     O parceiro só vê confirmação simples da reabertura.
     O plano de urgência, grupo de liderança e checklist ficam restritos à gestão/suporte. */
  let r=reservas.find(x=>x.parceiroId===current.id&&x.clienteId===cId&&x.dia===dia&&x.slotIndex===idx&&x.status==='reservado');
  let c=cliente(cId),slot=c.agenda[dia][idx],result={count:partnerReopenCount(current.id),blocked:false};
  if(r){
    r.status='reaberto';
    r.reopenedAt=new Date().toISOString();
    result=recordDesistencia(r,c,slot);
    const msg=montarMensagemUrgencia(c,dia,slot,current,result.count);
    registrarEmergencia(c,dia,idx,current,msg,result);
    save();
  }
  closeModal();
  showPartnerReopenResult(cId,dia,idx,result);
}
function registrarEmergencia(c,dia,idx,parceiro,msg,result){
  emergencias.unshift({
    id:'em_'+Date.now(), clienteId:c.id, dia, slotIndex:idx, parceiroId:parceiro.id,
    parceiroNome:nomeOperacional(parceiro), mensagem:msg, status:'aberta',
    plano:{fila:false,leadsHoje:false,leadsSemana:false,grupos:false,stories:false,facebook:false,substituto:false},
    createdAt:new Date().toISOString(), blocked:!!result.blocked
  });
}
function showPartnerReopenResult(cId,dia,idx,result){
  let c=cliente(cId),slot=c.agenda[dia][idx];
  let blockHtml=result.blocked?`<div class="blocked-box"><b>Cadastro em revisão operacional</b><br>Como houve reabertura em 3 datas diferentes, novas reservas ficam indisponíveis para este login até liberação da gestão.</div>`:'';
  modal(`<div class="modal-title"><h3>Horário reaberto</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="modal-body"><p>A vaga voltou para a agenda e o suporte foi avisado.</p><b>${c.nome}</b><br>${DIA_LABEL[dia]} · ${fmt(slot.inicio)} às ${fmt(slot.fim)}${blockHtml}<p class="tiny">A equipe de suporte fará a reorganização operacional. Você pode consultar suas reservas ou voltar aos horários disponíveis.</p></div><div class="actions"><button class="primary" onclick="closeModal();showMyReservations()">Minhas reservas</button><button class="secondary" onclick="closeModal();showSchedule()">Ver horários</button></div>`)
}
function renderEmergencyAdminBox(){
  const abertas=emergencias.filter(e=>e.status==='aberta');
  if(!abertas.length)return '';
  return `<div class="emergency-box"><div class="admin-top"><div><div class="emergency-title">🚨 Vagas reabertas para ação da gestão</div><p class="tiny">Este plano é exclusivo do suporte/liderança. O parceiro não vê este checklist.</p></div><span class="desist-count">${abertas.length} alerta${abertas.length>1?'s':''}</span></div>${abertas.slice(0,4).map(e=>emergencyAdminItem(e)).join('')}</div>`;
}
function emergencyAdminItem(e){
  const c=cliente(e.clienteId),s=c?.agenda?.[e.dia]?.[e.slotIndex];
  if(!c||!s)return '';
  return `<div class="warning-box"><b>${c.nome}</b><br>${DIA_LABEL[e.dia]} · ${fmt(s.inicio)} às ${fmt(s.fim)}<br><span class="tiny">Reaberta por: ${esc(e.parceiroNome||'parceiro')}</span><div class="actions" style="margin-top:10px"><button class="primary" onclick="abrirEmergenciaGestao('${e.id}')">Plano de urgência</button><button class="secondary" onclick="copyText(\`${(e.mensagem||'').replace(/`/g,'\`')}\`)">Copiar alerta</button><button class="secondary" onclick="window.open('${GRUPO_URGENCIA_URL}','_blank')">Abrir grupo</button><button class="secondary" onclick="marcarEmergenciaResolvida('${e.id}')">Marcar resolvida</button></div></div>`;
}
function abrirEmergenciaGestao(id){
  const e=emergencias.find(x=>x.id===id); if(!e)return;
  const c=cliente(e.clienteId),s=c?.agenda?.[e.dia]?.[e.slotIndex]; if(!c||!s)return;
  modal(`<div class="modal-title"><h3>Plano de urgência da gestão</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="modal-body"><b>${c.nome}</b><br>${DIA_LABEL[e.dia]} · ${fmt(s.inicio)} às ${fmt(s.fim)}<div class="copied-note">Ação da liderança: abrir grupo, copiar alerta e acionar rede para preencher a vaga.</div><div class="template-text">${esc(e.mensagem||'')}</div><div class="emergency-box"><div class="emergency-title">Checklist de ação</div><label class="emergency-check"><input type="checkbox"><span>Chamar parceiros em fila de espera.</span></label><label class="emergency-check"><input type="checkbox"><span>Chamar leads que falaram hoje.</span></label><label class="emergency-check"><input type="checkbox"><span>Chamar leads da semana.</span></label><label class="emergency-check"><input type="checkbox"><span>Postar nos grupos de parceiros.</span></label><label class="emergency-check"><input type="checkbox"><span>Publicar nos stories.</span></label><label class="emergency-check"><input type="checkbox"><span>Divulgar em grupos do Facebook.</span></label><label class="emergency-check"><input type="checkbox"><span>Confirmar parceiro substituto.</span></label></div></div><div class="actions"><button class="primary" onclick="window.open('${GRUPO_URGENCIA_URL}','_blank')">Abrir grupo de urgência</button><button class="secondary" onclick="copyText(\`${(e.mensagem||'').replace(/`/g,'\`')}\`)">Copiar alerta</button><button class="secondary" onclick="marcarEmergenciaResolvida('${e.id}')">Marcar resolvida</button></div>`)
}
function marcarEmergenciaResolvida(id){
  const e=emergencias.find(x=>x.id===id); if(e){e.status='resolvida';e.resolvedAt=new Date().toISOString();save();closeModal();showAdmin('quadro')}
}

/* D3.6.3.1 — GESTÃO BLINDADA
   Correção cirúrgica: o login da gestão NÃO pode cair no fluxo de WhatsApp do parceiro.
   O botão de entrar não depende mais de submit de formulário para abrir o painel.
   Regra: gestão autenticada sempre chama showAdmin('quadro') e mantém current=null. */
function openAdminLogin(){
  if(adminMode||window.__OE_ADMIN_MODE===true){adminMode=true;current=null;showAdmin(adminTab||'quadro');return}
  modal(`<div class="modal-title"><h3>Acesso gestão</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="modal-body"><input type="text" name="username" autocomplete="username" value="admin-osasco-express" style="position:absolute;width:1px;height:1px;opacity:0;pointer-events:none"><div class="field"><label>Senha</label><input class="input" type="password" id="adminPass" name="password" autocomplete="current-password" placeholder="Digite a senha" onkeydown="if(event.key==='Enter'){event.preventDefault();entrarGestaoBlindada()}"></div><p class="tiny">Você pode salvar esta senha no navegador para acessar mais rápido depois.</p></div><div class="actions"><button class="secondary" type="button" onclick="closeModal()">Voltar</button><button class="primary" type="button" onclick="entrarGestaoBlindada()">Entrar na gestão</button></div>`);
  setTimeout(()=>document.getElementById('adminPass')?.focus(),80)
}
function entrarGestaoBlindada(){
  const pass=(document.getElementById('adminPass')?.value||'').trim();
  if(pass!==ADMIN_PASS){alert('Senha incorreta.');document.getElementById('adminPass')?.focus();return}
  adminMode=true;window.__OE_ADMIN_MODE=true;current=null;adminTab='quadro';closeModal();showAdmin('quadro')
}
function adminLogin(){entrarGestaoBlindada();return false}
function showAdmin(tab=adminTab){
  if(!adminMode&&window.__OE_ADMIN_MODE!==true){openAdminLogin();return}
  adminMode=true;window.__OE_ADMIN_MODE=true;current=null;adminTab=tab||'quadro';
  app(`<div class="admin-shell"><aside class="sidebar"><button class="side-btn ${adminTab==='quadro'?'active':''}" onclick="showAdmin('quadro')">Quadro</button><button class="side-btn ${adminTab==='emergencias'?'active':''}" onclick="showAdmin('emergencias')">Vagas reabertas</button><button class="side-btn ${adminTab==='clientes'?'active':''}" onclick="showAdmin('clientes')">Clientes</button><button class="side-btn ${adminTab==='parceiros'?'active':''}" onclick="showAdmin('parceiros')">Parceiros</button><button class="side-btn ${adminTab==='aceites'?'active':''}" onclick="showAdmin('aceites')">Aceites</button><button class="side-btn" onclick="adminLogout()">Sair</button></aside><section class="admin-panel" id="adminPanel"></section></div>`);
  try{
    if(adminTab==='quadro')renderAdminBoard();
    if(adminTab==='emergencias')renderAdminEmergencias();
    if(adminTab==='clientes')renderAdminClientes();
    if(adminTab==='parceiros')renderAdminParceiros();
    if(adminTab==='aceites')renderAdminAceites();
  }catch(e){
    console.error('Erro ao abrir gestão:',e);
    document.getElementById('adminPanel').innerHTML=`<div class="admin-card"><h2>Erro ao abrir gestão</h2><p class="muted">O painel de gestão tentou abrir, mas encontrou um erro de renderização.</p><p class="tiny">${esc(e.message||e)}</p><div class="actions"><button class="primary" onclick="showAdmin('quadro')">Tentar novamente</button><button class="secondary" onclick="exportBackup()">Exportar backup JSON</button></div></div>`;
  }
}

function adminLogout(){adminMode=false;window.__OE_ADMIN_MODE=false;current=null;closeModal();showHome()}

/* D3.6.3.2 — AUTOAUDITORIA SEGURA
   Correção cirúrgica: runSelfCheck estava sendo chamada no painel admin,
   mas a função não existia. A gestão não pode quebrar por causa de uma
   auditoria auxiliar. Esta função nunca deve impedir o painel administrativo
   de abrir. */
function runSelfCheck(showModal){
  const erros=[];
  const avisos=[];
  try{
    if(!Array.isArray(clientes)||clientes.length===0)erros.push('Nenhum cliente cadastrado.');
    if(!Array.isArray(parceiros)||parceiros.length===0)erros.push('Nenhum parceiro cadastrado.');
    if(!Array.isArray(reservas))erros.push('Reservas não estão em formato de lista.');
    if(!Array.isArray(liberacoes))avisos.push('Liberações de líderes não estão em formato de lista.');
    if(!Array.isArray(desistencias))avisos.push('Histórico de reaberturas não está em formato de lista.');
    if(!Array.isArray(emergencias))avisos.push('Emergências não estão em formato de lista.');
    if(!Array.isArray(aceites))avisos.push('Aceites digitais não estão em formato de lista.');

    clientes.forEach(c=>{
      if(!c.id)erros.push('Cliente sem ID: '+(c.nome||'sem nome'));
      if(!c.nome)avisos.push('Cliente sem nome identificado.');
      if(!c.agenda){erros.push('Cliente sem agenda: '+(c.nome||c.id));return}
      DIAS.forEach(d=>{
        if(!Array.isArray(c.agenda[d]))avisos.push('Agenda do cliente '+(c.nome||c.id)+' sem dia '+d+'.');
        (c.agenda[d]||[]).forEach((s,idx)=>{
          if(!s.inicio||!s.fim)avisos.push('Horário incompleto em '+(c.nome||c.id)+' / '+d+' / item '+(idx+1)+'.');
          if(Number(s.vagas||0)<0)erros.push('Quantidade de vagas negativa em '+(c.nome||c.id)+' / '+d+'.');
        });
      });
    });

    parceiros.forEach(p=>{
      if(!p.id)avisos.push('Parceiro sem ID: '+fullName(p));
      if(!p.nome)avisos.push('Parceiro sem nome.');
      if(!p.telefone)avisos.push('Parceiro sem telefone: '+fullName(p));
      if(!p.status)avisos.push('Parceiro sem situação: '+fullName(p));
    });

    // Checagem de líderes padrão: ajuda a manter coroa e regra operacional.
    ['jose henrique pastel','clayton dos santos','renan lopes','reinaldo alves'].forEach(nome=>{
      const ok=parceiros.some(p=>partnerKey(p)===nome && isLeader(p));
      if(!ok)avisos.push('Líder/ponto focal não identificado como líder: '+nome+'.');
    });
  }catch(e){
    avisos.push('Autoauditoria encontrou erro auxiliar: '+(e.message||e));
  }

  const ok=erros.length===0;
  const resumo={ok,erros,avisos,version:APP_VERSION,checkedAt:new Date().toISOString()};
  window.__OE_LAST_SELF_CHECK=resumo;

  if(showModal){
    const erroHtml=erros.length?'<h4>Erros críticos</h4><ul>'+erros.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>':'<p class="status-note">Nenhum erro crítico encontrado.</p>';
    const avisoHtml=avisos.length?'<h4>Avisos</h4><ul>'+avisos.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>':'<p class="tiny">Nenhum aviso relevante.</p>';
    modal(`<div class="modal-title"><h3>Autoauditoria</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="modal-body"><p><b>${ok?'Painel apto para teste.':'Atenção: há erros críticos.'}</b></p><p class="tiny">Versão: ${APP_VERSION}</p>${erroHtml}${avisoHtml}</div><div class="actions"><button class="primary" onclick="closeModal()">Fechar</button><button class="secondary" onclick="exportBackup()">Exportar backup JSON</button></div>`);
  }
  return resumo;
}

function renderAdminBoard(){
  runSelfCheck(false);
  let body=adminView==='semana'?renderAdminWeekBoard():renderAdminDayBoard();
  document.getElementById('adminPanel').innerHTML=`<div class="admin-card"><div class="admin-top"><div class="admin-title"><h2>Quadro operacional</h2><p>${adminView==='semana'?'Visão da semana inteira para gestão, print e planejamento.':'Vagas numeradas, nomes confirmados, progresso por cliente e mensagens prontas para ação rápida.'}</p></div><span class="version-badge">${APP_VERSION}</span></div><div class="view-toggle"><button class="view-btn ${adminView==='dia'?'active':''}" onclick="setAdminView('dia')">Ver por dia</button><button class="view-btn ${adminView==='semana'?'active':''}" onclick="setAdminView('semana')">Ver semana inteira</button></div>${adminView==='dia'?`<div class="admin-day-tabs">${dayTabs('selectAdminDay',adminDay)}</div>`:''}<div class="tech-note"><b>Leitura rápida:</b> ${adminView==='semana'?'visão semanal já mostra todos os dias dentro de cada cliente. Por isso os botões Seg, Ter, Qua, Qui, Sex, Sáb e Dom ficam escondidos neste modo para evitar filtro duplicado. Toque em uma célula para abrir o detalhe por dia.':'escolha um dia da semana acima. Vaga livre aparece numerada como 01, 02, 03. Quando alguém reserva, o número permanece e o nome do parceiro aparece na moto.'}</div><div class="actions" style="margin-top:10px"><button class="secondary" onclick="runSelfCheck(true)">Autoauditoria</button><button class="secondary" onclick="exportBackup()">Exportar backup JSON</button></div></div>${renderEmergencyAdminBox()}${body}`
}
function renderAdminDayBoard(){
  let cards=clientes.filter(c=>c.ativo).map(c=>renderOpsCard(c,adminDay)).join('');
  return `<div class="ops-grid">${cards}</div>`
}
function setAdminView(view){adminView=view;renderAdminBoard()}
function renderAdminWeekBoard(){
  const active=clientes.filter(c=>c.ativo);
  const cards=active.map(c=>renderWeekClientCard(c)).join('');
  return `<div class="admin-safe-note"><b>Semana inteira:</b> visão compacta para celular, tablet e desktop. Ideal para printar e decidir onde agir primeiro sem abrir dia por dia.</div><div class="week-legend"><span class="legend-chip green">Fechado</span><span class="legend-chip amber">Parcial</span><span class="legend-chip red">Reaberta</span><span class="legend-chip">Vazio / sem horário</span></div><div class="week-admin-grid">${cards}</div>`
}
function renderWeekClientCard(c){
  const totalSemana=DIAS.reduce((a,d)=>a+clientDayStats(c,d).total,0);
  const filledSemana=DIAS.reduce((a,d)=>a+clientDayStats(c,d).filled,0);
  const dias=DIAS.map(d=>renderWeekDayBox(c,d)).join('');
  return `<article class="week-client-card"><div class="week-client-head"><div><h3><span class="client-dot" style="background:${c.cor}"></span> ${c.nome}</h3><p>${filledSemana}/${totalSemana} preenchidas na semana</p></div><button class="secondary" onclick="showAdmin('clientes')">Editar</button></div><div class="week-days-grid">${dias}</div></article>`
}
function renderWeekDayBox(c,dia){
  const st=clientDayStats(c,dia);
  const reab=desistenciasDoClienteDia(c.id,dia).length>0;
  const cls=reab?'reopened':st.total===0?'empty':st.filled===st.total?'closed':st.filled>0?'partial':'empty';
  const label=st.total===0?'Sem horário':st.livres===0?'Fechado':`${st.livres} livre${st.livres===1?'':'s'}`;
  return `<button class="week-day-box ${cls}" onclick="adminDay='${dia}';adminView='dia';renderAdminBoard()" title="${c.nome} · ${DIA_LABEL[dia]} · ${st.filled}/${st.total}"><b>${SHORT[dia]}</b><span class="ratio">${st.filled}/${st.total}</span><small>${reab?'Reaberta · ':''}${label}</small></button>`
}
function selectAdminDay(d){adminDay=d;renderAdminBoard()}
function renderOpsCard(c,dia){
  let total=0,filled=0,slots=[];
  (c.agenda[dia]||[]).forEach((s,idx)=>{
    let rr=reservationsForSlot(c.id,dia,idx);
    total+=Number(s.vagas||0);filled+=rr.length;
    for(let i=0;i<Number(s.vagas||0);i++){
      let r=rr[i],num=String(slots.length+1).padStart(2,'0'),p=r?parceiros.find(x=>x.id===r.parceiroId):null,nome=p?nomeOperacional(p):'Livre',klass=r?(r.cobriu?'covered':'filled'):'free',lead=p&&isLeader(p);
      slots.push(`<div class="moto ${klass} ${lead?'leader':''}" title="Vaga ${num} · ${fmt(s.inicio)}-${fmt(s.fim)} · ${p?fullName(p):'Livre'}${lead?' · Líder / ponto focal':''}"><span class="moto-num">${num}</span><span>${lead?'👑':'🏍'}</span><small class="moto-name">${esc(nome)}</small></div>`)
    }
  });
  let pct=total?Math.round((filled/total)*100):0,livres=Math.max(0,total-filled),closed=total&&filled===total;
  let msg=closed?'Agenda fechada':livres===1?'Última vaga livre':livres>1?`${livres} vagas livres`:'Sem vagas neste dia';
  return `<article class="ops-card ${closed?'closed':(livres===1?'alert':'')}"><div class="ops-head"><span class="client-dot" style="background:${c.cor}"></span><div><h3>${c.nome}</h3><p>${DIA_LABEL[dia]} · ${filled}/${total} preenchidas · ${livres} livres</p><p class="tiny"><b>${msg}</b></p></div></div><div class="progress"><div class="bar" style="width:${pct}%"></div></div><div class="motos">${slots.join('')||'<span class="tiny">Sem horários neste dia.</span>'}</div>${renderDesistenciasClienteDia(c.id,dia)}<div class="ops-actions"><button class="secondary" onclick="openMessageTemplates('${c.id}','${dia}')">Mensagens prontas</button><button class="secondary" onclick="showAdmin('clientes')">Editar cliente</button></div></article>`
}
function renderDesistenciasClienteDia(cId,dia){
  let list=desistenciasDoClienteDia(cId,dia);
  if(!list.length)return '';
  return `<div class="desist-list"><b>Reabertas / desistências</b>${list.map(d=>{let p=parceiros.find(x=>x.id===d.parceiroId),s=cliente(d.clienteId)?.agenda[d.dia]?.[d.slotIndex];return `<div class="desist-item"><span>${p?nomeComCoroa(p):'Parceiro'} · ${s?fmt(s.inicio)+'-'+fmt(s.fim):''}</span><span>${new Date(d.createdAt).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}</span></div>`}).join('')}</div>`
}
function firstName(id){return nomeOperacionalById(id)}
function fullNameById(id){let p=parceiros.find(x=>x.id===id);return p?fullName(p):'Parceiro'}

function clientDayStats(c,dia){let total=0,filled=0;(c.agenda[dia]||[]).forEach((s,idx)=>{total+=Number(s.vagas||0);filled+=reservationsForSlot(c.id,dia,idx).length});return{total,filled,livres:Math.max(0,total-filled)}}
function openMessageTemplates(cId,dia){
  const c=cliente(cId),st=clientDayStats(c,dia);
  const html=`<div class="modal-title"><h3>Mensagens prontas</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="modal-body"><p><b>${c.nome}</b> · ${DIA_LABEL[dia]} · ${st.filled}/${st.total} preenchidas · ${st.livres} livres.</p><div class="template-grid">
  <button class="template-btn" onclick="showTemplate('ultima','${cId}','${dia}')">Última vaga<small>Escassez sem pressão</small></button>
  <button class="template-btn" onclick="showTemplate('poucas','${cId}','${dia}')">Poucas vagas<small>Chamar parceiro ativo</small></button>
  <button class="template-btn" onclick="showTemplate('reaberta','${cId}','${dia}')">Vaga reaberta<small>Urgência operacional</small></button>
  <button class="template-btn" onclick="showTemplate('confirmacao','${cId}','${dia}')">Confirmação<small>Reforço de compromisso</small></button>
  <button class="template-btn" onclick="showTemplate('fila','${cId}','${dia}')">Fila de espera<small>Cadastro fora da prioridade</small></button>
  <button class="template-btn" onclick="showTemplate('sem_autorizacao','${cId}','${dia}')">Sem autorização<small>Orientar para SAC</small></button>
</div><p class="tiny">As mensagens usam linguagem preventiva: parceiro, agenda, reserva, disponibilidade, fila de espera operacional e análise operacional.</p></div><div class="actions"><button class="secondary" onclick="closeModal()">Voltar</button></div>`;
  modal(html)
}
function buildTemplate(type,cId,dia){
  const c=cliente(cId),st=clientDayStats(c,dia),diaTxt=DIA_LABEL[dia];
  const primeiraJanela=(c.agenda[dia]||[])[0];
  const horario=primeiraJanela?`${fmt(primeiraJanela.inicio)} às ${fmt(primeiraJanela.fim)}`:'horário disponível';
  const sac='11 98666-1784';
  const templates={
    ultima:`Fala, parceiro. Última vaga livre para ${c.nome} em ${diaTxt}, no horário ${horario}. Se tiver disponibilidade, me responde agora para eu te colocar na agenda.`,
    poucas:`Fala, parceiro. Ainda temos ${st.livres} vaga${st.livres===1?'':'s'} livre${st.livres===1?'':'s'} na agenda da ${c.nome} em ${diaTxt}. Se tiver disponibilidade, me avisa para eu reservar seu horário.`,
    reaberta:`Abriu uma vaga na ${c.nome} em ${diaTxt}, no horário ${horario}. Se tiver disponibilidade, me responde agora para o suporte reorganizar a operação.`,
    confirmacao:`Perfeito, parceiro. Sua reserva na ${c.nome}, em ${diaTxt}, está confirmada. Se surgir imprevisto, reabra a vaga com antecedência para o suporte chamar outro parceiro.`,
    fila:`Fala, parceiro. Por conta do histórico recente de disponibilidade, seu cadastro saiu da prioridade de horários recorrentes e está em fila de espera operacional. Para solicitar análise, fale com o SAC da Osasco Express: ${sac}.`,
    sem_autorizacao:`No momento, seu cadastro não está liberado para novas reservas na Reserva OE. Para entender a situação ou solicitar análise, fale com o SAC da Osasco Express: ${sac}.`
  };
  return templates[type]||''
}
function showTemplate(type,cId,dia){
  const msg=buildTemplate(type,cId,dia);
  modal(`<div class="modal-title"><h3>Mensagem pronta</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="modal-body"><div class="copy-box" id="copyText">${esc(msg)}</div><p class="tiny">Revise antes de enviar. Use tom humano e respeitoso.</p></div><div class="actions"><button class="primary" onclick="copyCurrentTemplate()">Copiar mensagem</button><button class="secondary" onclick="openMessageTemplates('${cId}','${dia}')">Voltar</button></div>`)
}
function copyCurrentTemplate(){
  const txt=document.getElementById('copyText')?.innerText||'';
  if(navigator.clipboard){navigator.clipboard.writeText(txt).then(()=>alert('Mensagem copiada.'))}else{prompt('Copie a mensagem:',txt)}
}
function exportBackup(){
  backupLocalData('export-admin');
  const payload={version:APP_VERSION,build:APP_BUILD,termVersion:TERM_VERSION,exportedAt:new Date().toISOString(),clientes,parceiros,reservas,liberacoes,desistencias,emergencias,aceites};
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='backup-agenda-osasco-express-'+APP_VERSION+'.json';a.click();URL.revokeObjectURL(a.href);
}
function checkClosed(cId,dia){let c=cliente(cId),key=cId+'|'+dia;let total=0,filled=0;(c.agenda[dia]||[]).forEach((s,idx)=>{total+=Number(s.vagas||0);filled+=reservationsForSlot(c.id,dia,idx).length});if(total&&filled===total&&!lastClosed[key]){lastClosed[key]=true;showCelebrate(c.nome,DIA_LABEL[dia])}else if(filled<total){lastClosed[key]=false}}
function showCelebrate(nome,dia){document.getElementById('celebrateTitle').textContent='Agenda fechada!';document.getElementById('celebrateText').textContent=`${nome} · ${dia}: todas as vagas foram preenchidas.`;document.getElementById('celebrate').classList.add('show');for(let i=0;i<24;i++){let e=document.createElement('div');e.className='confetti';e.textContent=['■','●','◆','▲'][i%4];e.style.left=(Math.random()*100)+'vw';e.style.color=['#dc2626','#059669','#2563eb','#f59e0b'][i%4];e.style.animationDelay=(Math.random()*0.5)+'s';document.body.appendChild(e);setTimeout(()=>e.remove(),2300)}}
function closeCelebrate(){document.getElementById('celebrate').classList.remove('show')}

/* BETA D3.6.3.6 — Aba dedicada de vagas reabertas
   Não altera a regra: parceiro não vê plano de urgência. A gestão ganha uma tela focada para agir rápido. */
function renderAdminEmergencias(){
  const abertas=(emergencias||[]).filter(e=>e.status!=='resolvida');
  const historico=(emergencias||[]).filter(e=>e.status==='resolvida');
  const resumo=`<div class="admin-card"><div class="admin-top"><div class="admin-title"><h2>Vagas reabertas</h2><p>Central de urgência exclusiva da gestão. O parceiro não vê este plano.</p></div><span class="version-badge">${APP_VERSION}</span></div><div class="admin-safe-note"><b>Regra operacional:</b> quando uma vaga reabre, o suporte copia o alerta, abre o grupo de urgência e executa o checklist. O navegador não envia mensagem sozinho.</div></div>`;
  const abertasHtml=abertas.length?abertas.map(e=>emergencyCard(e,true)).join(''):`<div class="admin-card">${empty('Nenhuma vaga reaberta em aberto','Quando um parceiro reabrir horário, a emergência aparecerá aqui para a gestão agir rápido.','')}</div>`;
  const histHtml=historico.length?`<div class="admin-card"><h3>Histórico resolvido</h3>${historico.slice(-8).reverse().map(e=>emergencyCard(e,false)).join('')}</div>`:'';
  document.getElementById('adminPanel').innerHTML=resumo+abertasHtml+histHtml;
}
function emergencyCard(e,open){
  const c=cliente(e.clienteId)||{};
  const p=parceiros.find(x=>x.id===e.parceiroId)||{};
  const s=c.agenda?.[e.dia]?.[e.slotIndex]||{};
  return `<article class="ops-card ${open?'alert':''}"><div class="ops-head"><span class="client-dot" style="background:${c.cor||'#dc2626'}"></span><div><h3>${open?'🚨 ':''}${esc(c.nome||'Cliente')}</h3><p>${DIA_LABEL[e.dia]||e.dia} · ${fmt(s.inicio||'')} às ${fmt(s.fim||'')}</p><p class="tiny">Reaberta por: <b>${esc(nomeOperacional(p)||'parceiro')}</b></p></div></div>${open?`<div class="ops-actions"><button class="primary" onclick="openEmergencyPlan('${e.id}')">Plano de urgência</button><button class="secondary" onclick="copyEmergency('${e.id}')">Copiar alerta</button><button class="secondary" onclick="openEmergencyGroup()">Abrir grupo</button><button class="secondary" onclick="resolveEmergency('${e.id}')">Marcar resolvida</button></div>`:`<p class="status-note">Resolvida pela gestão.</p>`}</article>`;
}

function renderAdminClientes(){document.getElementById('adminPanel').innerHTML=`<div class="admin-card"><div class="admin-top"><div class="admin-title"><h2>Clientes</h2><p>Inclua, edite e controle horários e vagas sem mexer no código.</p></div><button class="primary" onclick="editCliente()">+ Novo cliente</button></div></div>${clientes.map(c=>clientAdminCard(c)).join('')}`}
function clientAdminCard(c){let total=DIAS.reduce((a,d)=>a+(c.agenda[d]||[]).reduce((s,x)=>s+Number(x.vagas||0),0),0);let linhas=DIAS.map(d=>{let arr=c.agenda[d]||[];return arr.length?`<div class="hour-line"><span>${SHORT[d]}</span><small>${arr.map(s=>`${fmt(s.inicio)}-${fmt(s.fim)} · ${s.vagas} vaga${s.vagas>1?'s':''}`).join(' / ')}</small></div>`:''}).join('');return `<article class="client-admin-card"><div class="admin-top"><div><h3>${c.nome}</h3><p class="muted">${c.endereco||'Endereço não informado'}</p></div><span class="tag ${c.ativo?'green':'red'}">${c.ativo?'Ativo':'Inativo'}</span></div><div class="meta"><span class="tag blue">${total} vagas semanais</span><span class="tag">${c.telefone||'Telefone não informado'}</span></div><div class="hours-list">${linhas||'<span class="tiny">Sem horários cadastrados.</span>'}</div><div class="actions"><button class="primary" onclick="editCliente('${c.id}')">Editar cliente</button><button class="secondary" onclick="toggleCliente('${c.id}')">${c.ativo?'Inativar':'Ativar'}</button></div></article>`}
function editCliente(id){let c=id?structuredClone(cliente(id)):{id:'cliente_'+Date.now(),nome:'',endereco:'',telefone:'',grupo:'',ativo:true,cor:'#dc2626',agenda:Object.fromEntries(DIAS.map(d=>[d,[]]))};modal(`<div class="modal-title"><h3>${id?'Editar':'Novo'} cliente</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="form-grid"><div class="field"><label>Nome</label><input class="input" id="cl_nome" value="${esc(c.nome)}"></div><div class="field"><label>Telefone</label><input class="input" id="cl_tel" value="${esc(c.telefone||'')}"></div><div class="field"><label>Endereço</label><input class="input" id="cl_end" value="${esc(c.endereco||'')}"></div><div class="field"><label>Grupo WhatsApp</label><input class="input" id="cl_grupo" value="${esc(c.grupo||'')}"></div><div class="field"><label>Status</label><select class="select" id="cl_ativo"><option value="true" ${c.ativo?'selected':''}>Ativo</option><option value="false" ${!c.ativo?'selected':''}>Inativo</option></select></div></div><h3>Horários e vagas</h3><div id="clientDays">${DIAS.map(d=>dayEditor(c,d)).join('')}</div><div class="actions"><button class="secondary" onclick="copyTerToWeek()">Aplicar terça para quarta a domingo</button><button class="secondary" onclick="addSlotToDay('ter')">+ Horário na terça</button></div><div class="actions" style="margin-top:14px"><button class="secondary" onclick="closeModal()">Cancelar</button><button class="primary" onclick="saveCliente('${c.id}',${id?'true':'false'})">Salvar cliente</button></div>`)}
function dayEditor(c,d){let rows=(c.agenda[d]||[]).map(s=>slotEditor(d,s)).join('');return `<div class="day-editor" data-day="${d}"><h4>${DIA_LABEL[d]}</h4><div class="slots">${rows||'<p class="tiny">Sem horários neste dia.</p>'}</div><button class="secondary" onclick="addSlotToDay('${d}')">+ Adicionar horário</button></div>`}
function slotEditor(d,s={inicio:'18:00',fim:'00:00',vagas:1}){return `<div class="slot-row"><input class="input inicio" value="${s.inicio}"><input class="input fim" value="${s.fim}"><input class="input vagas" type="number" min="0" value="${s.vagas}"><button class="icon-btn" onclick="this.closest('.slot-row').remove()">×</button></div>`}
function addSlotToDay(d){let box=document.querySelector(`.day-editor[data-day="${d}"] .slots`);if(!box)return; if(box.querySelector('.tiny'))box.innerHTML='';box.insertAdjacentHTML('beforeend',slotEditor(d))}
function copyTerToWeek(){let ter=[...document.querySelectorAll(`.day-editor[data-day="ter"] .slot-row`)].map(row=>({inicio:row.querySelector('.inicio').value,fim:row.querySelector('.fim').value,vagas:row.querySelector('.vagas').value}));['qua','qui','sex','sab','dom'].forEach(d=>{let box=document.querySelector(`.day-editor[data-day="${d}"] .slots`);box.innerHTML=ter.map(s=>slotEditor(d,s)).join('')||'<p class="tiny">Sem horários neste dia.</p>'})}
function saveCliente(id,exists){let data={id,nome:v('cl_nome'),telefone:v('cl_tel'),endereco:v('cl_end'),grupo:v('cl_grupo'),ativo:v('cl_ativo')==='true',cor:exists?cliente(id)?.cor||'#dc2626':'#dc2626',agenda:{}};DIAS.forEach(d=>{data.agenda[d]=[...document.querySelectorAll(`.day-editor[data-day="${d}"] .slot-row`)].map(row=>({inicio:cleanTime(row.querySelector('.inicio').value),fim:cleanTime(row.querySelector('.fim').value),vagas:Number(row.querySelector('.vagas').value||0)})).filter(s=>s.inicio&&s.fim&&s.vagas>0)});if(!data.nome){alert('Informe o nome do cliente.');return}let i=clientes.findIndex(c=>c.id===id); if(i>=0)clientes[i]=data; else clientes.push(data);save();closeModal();renderAdminClientes()}
function cleanTime(t){t=String(t||'').trim().toUpperCase().replace('H',':');if(/^\d{1,2}$/.test(t))t=t+':00';let [h,m='00']=t.split(':');return h.padStart(2,'0')+':'+m.padStart(2,'0')}
function toggleCliente(id){let c=cliente(id);c.ativo=!c.ativo;save();renderAdminClientes()}
function renderAdminParceiros(){document.getElementById('adminPanel').innerHTML=`<div class="admin-card"><div class="admin-top"><div class="admin-title"><h2>Parceiros</h2><p>PIX visível para gestão. Inclua, edite, altere situação, função operacional ou liberação de líderes.</p></div><button class="primary" onclick="editParceiro()">+ Novo parceiro</button></div><input class="input" id="partnerSearch" placeholder="Buscar por nome ou WhatsApp" oninput="renderPartnerList()"><div class="chips"><button class="chip active" onclick="filterPartnerStatus='' ;renderPartnerList()">Todos</button><button class="chip" onclick="filterPartnerStatus='ativo';renderPartnerList()">Ativos</button><button class="chip" onclick="filterPartnerStatus='fila';renderPartnerList()">Fila</button><button class="chip" onclick="filterPartnerStatus='sem_autorizacao';renderPartnerList()">Sem autorização</button></div><div class="focal-note">👑 Líder / ponto focal: José Henrique, Clayton, Renan Lopes e Reinaldo Alves não dividem o mesmo ponto e horário, salvo liberação manual da gestão.</div></div><div id="partnerList"></div>`;filterPartnerStatus='';renderPartnerList()}
let filterPartnerStatus='';
function renderPartnerList(){let q=(document.getElementById('partnerSearch')?.value||'').toLowerCase();let list=parceiros.filter(p=>(!filterPartnerStatus||p.status===filterPartnerStatus)&&(fullName(p).toLowerCase().includes(q)||nomeOperacional(p).toLowerCase().includes(q)||String(p.telefone).includes(q)));document.getElementById('partnerList').innerHTML=list.map(p=>`<article class="partner-card"><div class="admin-top"><div><h3>${leaderIcon(p)}${esc(nomeOperacional(p))}</h3><p class="muted">${esc(fullName(p))}</p><p class="muted">Telefone: ${esc(p.telefone)}</p><p><b>PIX:</b> ${esc(p.pix||'não informado')}</p><p class="status-note">Reaberturas em datas diferentes: <b>${partnerReopenCount(p.id)}/3</b></p></div><span class="tag ${p.status==='ativo'?'green':p.status==='sem_autorizacao'?'red':p.status==='fila'?'amber':'blue'}">${STATUS_LABEL[p.status]||p.status}</span></div><div class="meta"><span class="tag">${esc(p.veiculo||'Moto')}</span><span class="tag ${isLeader(p)?'leader':''}">${FUNCAO_LABEL[p.funcao||'comum']||'Parceiro comum'}</span></div><div class="actions"><button class="primary" onclick="editParceiro('${p.id}')">Editar</button><button class="secondary" onclick="changePartnerStatus('${p.id}','fila')">Fila de espera</button><button class="secondary" onclick="changePartnerStatus('${p.id}','sem_autorizacao')">Sem autorização</button>${isLeader(p)?`<button class="secondary" onclick="openFocalException('${p.id}')">Liberar exceção</button>`:''}<button class="danger" onclick="deleteParceiro('${p.id}')">Excluir</button></div></article>`).join('')||empty('Nenhum parceiro encontrado','','')}
function editParceiro(id){let p=id?structuredClone(parceiros.find(x=>x.id===id)):{id:'',nome:'',sobrenome:'',telefone:'',pix:'',veiculo:'Moto',status:'ativo',funcao:'comum',obs:''};modal(`<div class="modal-title"><h3>${id?'Editar':'Novo'} parceiro</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="form-grid"><div class="field"><label>Nome</label><input class="input" id="p_nome" value="${esc(p.nome)}"></div><div class="field"><label>Sobrenome</label><input class="input" id="p_sob" value="${esc(p.sobrenome||'')}"></div><div class="field"><label>Telefone/WhatsApp</label><input class="input" id="p_tel" value="${esc(p.telefone||'')}"></div><div class="field"><label>PIX</label><input class="input" id="p_pix" value="${esc(p.pix||'')}"></div><div class="field"><label>Veículo</label><input class="input" id="p_veic" value="${esc(p.veiculo||'Moto')}"></div><div class="field"><label>Situação</label><select class="select" id="p_status">${Object.keys(STATUS_LABEL).map(s=>`<option value="${s}" ${p.status===s?'selected':''}>${STATUS_LABEL[s]}</option>`).join('')}</select></div><div class="field"><label>Função operacional</label><select class="select" id="p_funcao"><option value="comum" ${(p.funcao||'comum')==='comum'?'selected':''}>Parceiro comum</option><option value="lider" ${isLeader(p)?'selected':''}>👑 Líder / ponto focal</option></select></div></div><div class="field"><label>Observações</label><textarea class="textarea" id="p_obs">${esc(p.obs||'')}</textarea></div><div class="actions"><button class="secondary" onclick="closeModal()">Cancelar</button><button class="primary" onclick="saveParceiro('${id||''}')">Salvar parceiro</button></div>`)}
function saveParceiro(oldId){let telefone=v('p_tel'),id=normPhone(telefone);let p={id,nome:v('p_nome'),sobrenome:v('p_sob'),telefone,pix:v('p_pix'),veiculo:v('p_veic'),status:v('p_status'),funcao:v('p_funcao')||'comum',obs:v('p_obs')};if(!p.nome||!p.telefone){alert('Informe nome e telefone.');return}let i=parceiros.findIndex(x=>x.id===(oldId||id));if(i>=0)parceiros[i]=p;else parceiros.push(p);save();closeModal();renderPartnerList()}
function changePartnerStatus(id,status){let p=parceiros.find(x=>x.id===id);modal(`<div class="modal-title"><h3>Alterar situação?</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="modal-body"><p><b>${esc(nomeOperacional(p))}</b> passará para: <b>${STATUS_LABEL[status]}</b>.</p><p>O histórico será mantido e o cadastro poderá ser reavaliado pela gestão.</p></div><div class="actions"><button class="secondary" onclick="closeModal()">Cancelar</button><button class="primary" onclick="parceiros.find(x=>x.id==='${id}').status='${status}';save();closeModal();renderPartnerList();">Confirmar alteração</button></div>`)}
function deleteParceiro(id){let p=parceiros.find(x=>x.id===id);modal(`<div class="modal-title"><h3>Excluir cadastro?</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="modal-body"><p>Use esta opção apenas para cadastro duplicado ou criado por engano.</p><p>Para casos operacionais, prefira alterar a situação do parceiro.</p></div><div class="actions"><button class="secondary" onclick="closeModal()">Cancelar</button><button class="danger" onclick="parceiros=parceiros.filter(x=>x.id!=='${id}');save();closeModal();renderPartnerList();">Excluir cadastro</button></div>`)}
function slotOptionsForException(){let out='';clientes.filter(c=>c.ativo).forEach(c=>DIAS.forEach(d=>(c.agenda[d]||[]).forEach((s,idx)=>{out+=`<option value="${c.id}|${d}|${idx}">${c.nome} · ${DIA_LABEL[d]} · ${fmt(s.inicio)} às ${fmt(s.fim)}</option>`})));return out}
function openFocalException(id){let p=parceiros.find(x=>x.id===id);let itens=liberacoes.filter(x=>x.parceiroId===id&&x.ativo!==false);let lista=itens.length?`<div class="exception-list"><b>Liberações ativas</b>${itens.map(x=>{let c=cliente(x.clienteId),s=c?.agenda[x.dia]?.[x.slotIndex];return `<div class="exception-line"><span>${c?.nome||'Cliente'} · ${DIA_LABEL[x.dia]} · ${s?fmt(s.inicio)+' às '+fmt(s.fim):'horário'}</span><button class="icon-btn" onclick="removeFocalException('${x.id}','${id}')">×</button></div>`}).join('')}</div>`:'';modal(`<div class="modal-title"><h3>Liberar exceção operacional</h3><button class="close-x" onclick="closeModal()">×</button></div><div class="modal-body"><p>${leaderIcon(p)}<b>${esc(nomeOperacional(p))}</b></p><p>Use apenas quando a gestão decidir que este líder pode dividir ponto e horário com outro líder.</p>${lista}<div class="field"><label>Ponto e horário</label><select class="select" id="focal_slot">${slotOptionsForException()}</select></div><div class="field"><label>Motivo interno</label><input class="input" id="focal_motivo" placeholder="Ex: liberação manual da gestão"></div></div><div class="actions"><button class="secondary" onclick="closeModal()">Voltar</button><button class="primary" onclick="saveFocalException('${id}')">Salvar liberação</button></div>`)}
function saveFocalException(id){let [clienteId,dia,slotIndex]=v('focal_slot').split('|');if(!clienteId){alert('Escolha o ponto e horário.');return}liberacoes.push({id:'lf_'+Date.now(),parceiroId:id,clienteId,dia,slotIndex:Number(slotIndex),motivo:v('focal_motivo')||'liberação manual da gestão',createdAt:new Date().toISOString(),ativo:true});save();openFocalException(id)}
function removeFocalException(exceptionId,partnerId){liberacoes=liberacoes.filter(x=>x.id!==exceptionId);save();openFocalException(partnerId)}
function normalizeDataset(){
  clientes.forEach(c=>{if(!c.agenda)c.agenda=Object.fromEntries(DIAS.map(d=>[d,[]]));DIAS.forEach(d=>{if(!Array.isArray(c.agenda[d]))c.agenda[d]=[]})});
  parceiros.forEach(p=>{
    if(!p.id)p.id=normPhone(p.telefone);
    if(!p.status)p.status='ativo';
    if(!p.veiculo)p.veiculo='Moto';
    if(!p.funcao)p.funcao=LIDERES_PADRAO.includes(partnerKey(p))?'lider':'comum';
    if(partnerKey(p)==='renan' || partnerKey(p)==='renan lopes'){p.nome='Renan';p.sobrenome='Lopes';p.funcao='lider'}
    if(LIDERES_PADRAO.includes(partnerKey(p)))p.funcao='lider';
  });
  desistencias=Array.isArray(desistencias)?desistencias:[];
  emergencias=Array.isArray(emergencias)?emergencias:[];
  aceites=Array.isArray(aceites)?aceites:[];
  save();
}
function modal(html){document.getElementById('modalBox').innerHTML=html;document.getElementById('modal').classList.add('show')}
function closeModal(){document.getElementById('modal').classList.remove('show')}
function empty(t,p,actions){return `<div class="empty"><h3>${t}</h3><p>${p||''}</p><div class="actions" style="justify-content:center">${actions||''}</div></div>`}
function v(id){return document.getElementById(id)?.value?.trim()||''}
function esc(s){return String(s||'').replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]))}
document.getElementById('modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal()});
normalizeDataset();
/* BETA D3.6.3.6 Auditoria final: ajustes de navegação/admin e documentação. Regras principais preservadas. */
showHome();