
import NormalText from "@/app/components/basics/normaltext";
import TextDiv, { Pilar, Renata } from "@/app/components/basics/text";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";



export default function TcompreTextual1() {

    const currentRoute = "/tcompreleitora3"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format">
                <span>
                    <b> COMPREENSÃO LEITORA - ATIVIDADE 3 </b>
                </span>
                <div className="flex gap-4">
                    <IconBook />
                    <IconVolume />
                    <IconRefresh />
                </div>
            </div>
            <div className="body-text-layout">
                <TextDiv>
                    <NormalText className="text-center">
                    Texto III - Pilar precisa consultar sua filha no Posto de Saúde.
                    </NormalText>
                </TextDiv>


                <TextDiv className="flex flex-col gap-5">
                <Pilar>
!Hola, Renata!
</Pilar> 

<Renata
text = {["Oi,  Pilar!    Estás   precisando   de    alguma    coisa?"]}
phoneme = {["['oj,   pi'laɾ!      Iʃ'tayʃ      pɾesi'zãdʊ     'dʒI     aw'guma    'kojza?]" ]}
/> 

<Pilar>
Sí, necesito de una consulta para mi hija, pero no sé cómo hacer.
</Pilar> 

<Renata
text = {["Vocês    já   têm   o   cartão   do   SUS? "]}
phoneme = {["[  vo'sejʃ    'ʒa    'tẽj    'ʊ    kaɾ'tãw  'dʊ    'sujʃ?]"]}
/> 

<Pilar>
¿Qué es eso? 
</Pilar> 

<Renata
text = {["É   o   cartão   do   nosso   Sistema   único   de   Saúde   Pública. "]}
phoneme =     {[ "['ɛ   'ʊ   kaɾ'tãw   'dʊ    'nosu       siʃ'tẽma     'ũɲikʊ  'dʒI    sa'udʒI    'publika]"  ]}
/>  
<Pilar>
Ah! No lo sabía. ¿Y cómo hago para conseguir una tarjeta como esa?
</Pilar>  

<Renata
text = {["Pois,   bem!   Primeiro,   tu   tens   que   ir   ao    Posto   de    Saúde   mais   próximo   da   tua   casa.", "Tens   que   levar     todas  as     tuas    documentações:   Protocolo   de    Refúgio;   CPF;         comprovante  de   residência.", "E   chegando   lá,    tens   que    dizer   que   tu    precisas     tirar    o    cartão    do   SUS."]}

 phoneme = {["[ 'pojʃ,      'bẽj!     pɾi'mejɾʊ,    'tu    'tẽjʃ      'kI    'iɾ  'aw     'poʃtʊ    'dʒI     sa'udʒI    'majʃ    'pɾosimʊ    'da   'twa   'kaza]", 
	"['tẽjʃ      'kI      lɛ'vaɾ        'todazajʃ       'twaʃ       doku'mẽtasõjʃ:           pɾɔtɔ'kɔlʊ   'dʒI     xe'fuʒiʊ;   'se 'pe 'ɛfI;         kõpɾo'vãtʃI     'dʒI     xezi'dẽsya]",           "['I       ʃe'gãdʊ       'la,     'tẽjʃ       'kI     dʒi'zeɾ    'kI     'tu     pɾe'sizajʃ      tʃi'ɾaɾ   'ʊ     kaɾ'tãw    'dʊ    'sujʃ]"]} 
/>  

<Pilar>
¿Esa tarjeta la entregan ahí mismo o demora?  
</Pilar>

<Renata
text = {["Sim!  Leva  apenas  o  tempo  necessário   pra   inserir,  no  nosso  Sistema  de   Saúde,   teus   dados  pessoais   e   da   tua   família."]} 
	phoneme =  {["['sĩ!   'lɛva    a'pẽnajʃ   'ʊ   'tẽpʊ       nɛse'saɾiw     'pɾa     ĩse'ɾiɾ,    'nʊ   'nɔsʊ      siʃ'tẽma   'dʒI    sa'udʒI,   'tɛwʃ    'daduʃ       pe'suayʃ     'I   'da    'twa   fa'miʎa]"]}
/> 

<Pilar>
¿Y cuándo puedo consultar a mi hija?
</Pilar>

<Renata
 text = {[" No    mesmo    dia."]}
phoneme = {["['nʊ      'mejʃmʊ    'dʒja]"]}
/> 

<Pilar> 
¡Qué bien! Gracias, Renata.
</Pilar>

<Renata
text = {["Precisando    de    qualquer    coisa,   é    só    me    falar,   Pilar."]}   
phoneme = {["[  pɾesi'zãdʊ      'dʒI     kwaw'kɛɾ     'koyza,    'ɛ    'so     'mI     fa'laɾ,    pi'laɾ]  "]}
/> 

<Pilar>
¡Hasta luego, Renata! 
</Pilar>

<Renata
text = {["Tchau,   Pilar. "]}
phoneme = {[" ['tʃaw,    pi'laɾ]  "]}
/> 



                </TextDiv>

            </div>
            <NavBar currentRoute={currentRoute} />

        </div>
    )

}


