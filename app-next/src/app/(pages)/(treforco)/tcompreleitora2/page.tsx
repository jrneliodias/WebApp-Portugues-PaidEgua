
import NormalText from "@/app/components/basics/normaltext";
import TextDiv, {Escrituario, Juan } from "@/app/components/basics/text";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";



export default function TcompreTextual1() {

    const currentRoute = "/tcompreleitora2"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format ">
                <span>
                    <b> COMPREENSÃO LEITORA - ATIVIDADE 2 </b>
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
                        Diálogos relacionados ao contexto Migratório
                    </NormalText>
                </TextDiv>
                <TextDiv>
                    <NormalText className="text-center">
                        Texto I - Juan, um imigrante venezuelano, chega à Secretaria de Justiça e Direitos
                        Humanos.
                    </NormalText>
                </TextDiv>

                <TextDiv className="flex flex-col gap-5">
                    <Juan>
                        ¡Buenos días! ¿Aquí es la Secretaria de Justicia y Derechos Humanos?
                    </Juan>
                    <Escrituario
                        text={["Sim. Bom dia! Tu consegues me entender?"]}
                        phoneme={["['sĩ     'bõ     'dʒja!     'tu     kõ'segiʃ     'mI     ẽtẽ'deɾ?]"]}
                    />

                    <Juan>
                        No hablo portugués, pero consigo entenderla bien.
                    </Juan>
                    <Escrituario
                        text={["Sou    uma    das   Assistentes   Sociais   daqui   da   SEJUDH.", "Qual     é   teu   nome?   Como   posso   te   ajudar?"]}
                        phoneme={["['sow    'ũma    'dajʃ        asiʃ'tẽtʃi          sosi'ajʃ      da'ki   'da     seʒudea'ga.", "'kwaw   'ɛ   'tew   'nõmI?      'kõmʊ    'pɔsʊ    'tʃI   aʒu'daɾ?]"]}
                    />

                    <Juan>
                        Mi nombre es Juan Martínez.
                        Necesito de información sobre cómo puedo regularizar mi documentación para quedarme en Brasil.

                    </Juan>
                    <Escrituario
                        text={["Muito prazer, Juan.", "Seja bem-vindo ao nosso país.", "Essa é a primeira vez que vens ao Brasil? Já conhecias Belém?"]}
                        phoneme={["['muĩtʊ pɾa'zeɾ, xa'vjɛɾ].", "['seʒa 'bẽjvĩdʊ 'aw 'nɔsʊ pa'iʃ]", "['ɛsa    'ɛ   'a    pɾi'mejɾa     'vejʃ      'kI      'vẽjʃ     'aw    bɾa'ziw,     'ʒa        koɲe'siajʃ      bɛ'lẽj?] "]}
                    />

                    <Juan>
                        No, no conocía Belém. Esta es la primera vez que salgo de mi país.
                    </Juan>
                    <Escrituario
                        text={[" E    qual    é    teu   país?"]}
                        phoneme={["['I    'kwaw   'ɛ    'tew    pa'iʃ?]"]}
                    />

                    <Juan>
                        Venezuela.
                    </Juan>

                    <Escrituario
                        text={["Não    sei    se   tu    sabes,   mas     desde               2017,   ", "o   Brasil    aprovou   uma   lei   que  regulamenta  a  migração   em  nosso  país,  a   Lei     13.445.  ", "Isso   dá    direito     de   Refúgio   a   todo   e   qualquer   venezuelano   que   decide    fixar    residência    em   nosso   país."]}
                        phoneme={["['nãw    'sej    'sI    'tu      'sabIʃ,    'majʃ      'deʃdʒI     'dojʃ  'miw  'I   dʒIze'setʃI]  ", "['ʊ   bɾa'ziw    apɾo'vow   'ũma   'lej    'kI       xegula'mẽta    'a  migɾa'sãw     'ẽj    'nɔsʊ     pa'iʃ,  'a   'lej   'tɾezI  'miw  kwatɾo'sẽtʊʃ  'I  kwa'ɾẽta  'I  'sĩkʊ]  ", "[ 'isʊ   'da     dʒi'ɾejtʊ    'dʒI    xe'fuʒiʊ   'a   'todʊ   'I     kwaw'kɛɾ     venezwe'lãnʊ     'kI     de'sidʒI    fi'kisaɾ     xesi'dẽsja       'ẽj     'nɔsʊ      pa'iʃ] "]}
                    />

                    <Juan>
                        Sí, ya lo sabía, por eso decidí cruzar la frontera.
                    </Juan>

                    <Escrituario
                        text={["Então,   nesse   caso,   eu   presumo   que   tu   ainda   não   tens   o   Protocolo   de   Refúgio,   né?"]}
                        phoneme={["[ẽ'taw,      'nesI     'kazʊ,   'ew     pɾe'zũmʊ     'kI    'tu     a'ĩda    'nãw    'tejʃ   'ʊ     pɾɔtɔ'kɔlʊ    'dʒI   xe'fuʒiʊ,   'nɛ?]"]}
                    />
                    <Juan>
                        No, aún no lo tengo.
                    </Juan>

                    <Escrituario
                        text={["Muito    Bem!  Nós   precisaremos   fazer   algumas    perguntas  pessoais",
                            "para    saber   qual     é   a   tua     situação   e   quais    são   as      tuas    necessidades. ",
                            "Mas   não   te   preocupas,   porque   tudo   que   conversarmos   aqui,    ficará     sob   sigilo    absoluto, ", "as   informações   não   serão   repassadas   a   nenhum   outro   órgão   do   governo."]}

                        phoneme={["['muĩtʊ     'bẽj!    'nɔjʃ       pɾesi'zamʊʃ        fa'zeɾ    aw'gumajʃ    peɾ'gũtajʃ     pesʊ'ajʃ]",
                            " 'paɾa       sa'beɾ   'kwaw   'ɛ   'a   'twa      sitwa'sãw   'I   'kwajʃ    'sãw   'ajʃ      'twajʃ      nesesi'dadʒIʃ] ",
                            "['majʃ    'nãw  'tʃI    pɾeʊ'kupajʃ,      poɾ'ke    'tudʊ     'kI         kõvɛɾ'saɾmʊʃ       a'ki,     fika'ɾa     'sobI   si'ʒilʊ    abIso'lutʊ] ",
                            "['ajʃ       ĩfɔɾma'sõjʃ     'nãw    se'ɾãw     ɾepa'sadajʃ      'a       nẽj'ũ      'owtɾʊ   'ɔɾgãw   'dʊ   gov'eɾnʊ] "]}
                    />



                    <Escrituario
                        text={["Vamos   começar   preenchendo   a   ficha   de   atendimento   ao   migrante, ",
                            "mas   antes   precisamos    tirar     cópia     de    todos   os    teus   documentos. ",
                            "Essas   cópias   ficarão   arquivadas   apenas   nesta   Secretaria, ",
                            "nós   também   não    iremos    repassá-las   a   nenhuma   outra   Secretaria.  ",]}

                        phoneme={["['vãmʊʃ     kõme'saɾ        pɾɛẽ'ʃẽdʊ        'a    'fiʃa    'dʒI     atẽdʒi'mẽtʊ     'aw     mi'gɾãtʃI] ",
                            "['majʃ    'ãtʃIʃ       pɾesi'zamʊʃ     tʃi'ɾaɾ    'kɔpiayʃ    'dʒI    to'dʊʃ    'ʊʃ    'tewʃ      dokũ'mẽtʊʃ ] ",
                            "['ɛsajʃ     'kɔpiajʃ    fika'ɾãw     aɾki'vadajʃ      a'pẽnajʃ    'nɛʃta     sekɾɛta'ɾia]",
                            "['nɔjʃ       tã'bẽj      'nãw     i'ɾẽmʊʃ        ɾepa'salajʃ     'a       nẽj'ũma     'owtɾa     sekɾɛta'ɾia]  ",]}
                    />

                    <Escrituario
                        text={["Tu     és    casado    ou    solteiro?"]}
                        phoneme={["['tu     'ɛjʃ      ka'zadʊ    'ow     sow'tejɾʊ?]"]}
                    />

                    <Juan>Soy casado, pero mi mujer y mi hijo se quedaron en Venezuela hasta que yo pueda buscarlos.
                    </Juan>

                    <Escrituario
                        text={["Entendi!"]}
                        phoneme={["[ẽtẽ'dʒi!] "]}
                    />


                    <Escrituario
                        text={["Bem,   com   teus   documentos   iremos   fazer   a   Solicitação   do   Protocolo   de   Refúgio ",
                            "e   solicitar   a   Carteira   de   Registro   Nacional   de   Migrante. ",
                            "Esses    documentos   tu   poderás   receber   na   Polícia   Federal.  ",
                            "Iremos   também   solicitar   o       CPF      –   que   é   o   Cadastro   de   Pessoa  Física, ",
                            "esse    é    um    documento   obrigatório    no   Brasil",
                            "que,  qualquer   pessoa   pode   tirar,    independentemente    de     sua   nacionalidade. ",
                            "Tu    irás     recebê-lo    na   Receita   Federal.  ",]}

                        phoneme={["['bẽj,      'kõ      'tewʃ      dokũ'mẽtʊʃ        i'ɾẽmʊʃ     fa'zeɾ   'a      soʎisita'sãw    'dʊ     pɾɔtɔ'kɔlʊ    'dʒI    xe'fuʒiʊ]      ",
                            "['I     soʎisi'taɾ   'a      kaɾ'tejɾa    'dʒI      xe'ʒiʃtɾʊ     nasjo'naw   'dʒI    mi'gɾãtʃI] ",
                            "[ 'ɛsIʃ         doku'mẽtʊʃ       'tu     pɔdɛ'ɾajʃ      xese'beɾ    'na     po'ʎisja   fɛdɛ'ɾaw]  ",
                            "[i'rẽmʊʃ       tã'bẽj        soʎisi'taɾ   'ʊ    'se 'pe 'ɛfI   –     'kI      'ɛ   'ʊ     ka'daʃtɾʊ    'dʒI      pe'soa     'fizika] ",
                            "['esI       'ɛ      'ũ        doku'mẽtʊ       obɾiga'tɔɾjʊ      'nʊ    bɾa'ziw] ",
                            "['kI,     kwaw'kɛɾ      pe'soa      'pɔdʒI    tʃi'ɾaɾ,ĩdɛpẽdẽtʃI'mẽtʃI  'dʒI     'swa     nasjonaʎi'dadʒI]",
                            "['tu     i'ɾajʃ        ɾese'belʊ      'na      xe'sejta     fɛdɛ'ɾaw]",]}
                    />
                    <Escrituario
                        text={["O   único   documento   que   conseguimos   te   entregar   ainda   hoje   é   a   Carteira   de   Trabalho   Digital. ",
                            "Esse   é   um   documento   que   te   dará   permissão   para   trabalhar   legalmente   em   nosso   país.",
                            "Qual    é   a    tua     profissão ? "]}

                        phoneme={
                            ["['ʊ   'ũɲikʊ       doku'mẽtʊ       'kI         kõse'gimʊʃ       'tʃI      ẽtɾɛ'gaɾ        a'ĩda     'oʒI     'ɛ    'a     kaɾ'tejɾa    'dʒI      tɾaba'ʎʊ     dʒiʒi'taw] ",
                            "['esI      'ɛ     'ũ       doku'mẽtʊ       'kI     'tʃI    da'ɾa      peɾmi'sãw      'paɾa tɾaba'ʎaɾ        lɛgaw'mẽtʃI     'ẽj      'nɔsʊ      pa'iʃ]   ",
                            "['Kwaw    'ɛ   'a     'twa      pɾofi'sãw?] ",]}

                    />

                    <Juan>
                        Soy profesor.
                    </Juan>

                    <Escrituario
                        text={["Que   legal!   Tu   és    professor   de   quê?"]}
                        phoneme={["[ 'kI    lɛ'gaw!    'tu   'ɛjʃ       pɾofe'soɾ     'dʒI    'ke?] "]}
                    />

                    <Juan>
                        Inglés. ¿Es difícil dar clase de inglés aquí en Belém?
                    </Juan>
                    <Escrituario
                        text={["É   difícil     dar   aula   de   qualquer   disciplina   neste   país.   Infelizmente   os   professores    não   são   valorizados   aqui "]}
                        phoneme={["['ɛ   dʒi'fisiw    'daɾ    'awla  'dʒI     kwaw'kɛɾ     dʒisi'plina     'nejʃtʃI    pa'iʃ.       ĩfeʎiʃ'mẽtʃI       'ʊʃ       pɾofe'soɾIʃ       'nãw    'sãw      valoɾi'zadʊʃ      a'ki] "]}
                    />

                    <Juan>
                        Tampoco en Venezuela.
                    </Juan>

                    <Escrituario
                        text={["Aqui   está   a    tua    carteira    de   trabalho. "]}
                        phoneme={["[a 'ki      Iʃ'ta    'a    'twa      kaɾ'tejɾa     'dʒI     tɾa'baʎʊ]  "]}
                    />

                    <Juan>
                        Muchas gracias. ¿Cuál es la dirección de los lugares donde tengo que ir?
                    </Juan>

                    <Escrituario
                        text={["A    Polícia    Federal   fica    no   Aeroporto   Internacional    de    Belém ",
                            "e   a   Receita   Federal    fica   na      Av.      Governador    José    Malcher,      nº        2803.",]}

                        phoneme={["['a     po'ʎisja      fɛdɛ'ɾaw    'fika     'nʊ     aɛɾo'poɾtʊ       ĩtɛɾnasjo'naw      'dʒI      bɛ'lẽj]",
                            "['I     'a      xe'sejta     fɛdɛ'ɾaw     'fika    'na   avẽ'ɲida       govɛɾna'doɾ       ʒo'zɛ       maw'ʃɛɾ,   'nũmeɾʊ   'vĩtʃI   'ojtʊ  'zɛɾʊ  'tɾejʃ]"]}
                    />

                    <Escrituario
                        text={["Juan,     tu    tens   onde   ficar   aqui   em   Belém? "]}
                        phoneme={["[ xa'vjeɾ,      'tu     'tẽjʃ      'õdʒI    fi'kaɾ     a'ki      'ẽj     bɛ'lẽj?] "]}
                    />

                    <Juan>
                        Sí, voy a quedarme en la casa de una amiga brasileña. Ya la conozco hace mucho tiempo, por eso comprendo muy bien el portugués. Gracias por todo. Usted es muy amable.
                    </Juan>

                    <Escrituario
                        text={["Que   bom,   Juan! ",
                            "Eu    também   tenho   muitos   amigos   venezuelanos,   por isso   consigo   te   compreender   bem.",
                            "Então,     mas    uma    vez      seja     bem-vindo     ao    nosso     país,    à    nossa    cidade.",]}

                        phoneme={["['kI      'bõ,      xa'vjeɾ! ",
                            "'ew        tã'bẽj         'tẽɲʊ      'muĩtʊʃ      a'migʊʃ       vẽnezwɛ'lãnʊʃ", "po'ɾisʊ        cõ'sigʊ     'tʃI         kõpɾẽ'deɾ         'bẽj]", "[ẽ'tãw,       'majʃ      'ũma     'vejʃ       'seʒabẽj'vĩdʊ         'aw      'nɔsʊ         pa'iʃ", "     'a       'nɔsa       si'dadʒI]"]}
                    />

                    <Juan>
                        ¡Hasta luego!
                    </Juan>

                    <Escrituario
                        text={["Até     logo!	"]}
                        phoneme={["[a'tɛ     'lɔgʊ]"]}
                    />








                </TextDiv>

            </div>
            <NavBar currentRoute={currentRoute} />

        </div>
    )

}


