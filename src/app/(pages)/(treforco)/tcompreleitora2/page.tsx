
import NormalText from "@/app/components/basics/normaltext";
import TextDiv, { Escrituario, Juan } from "@/app/components/basics/text";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";



export default function TcompreTextual1() {

    const currentRoute = "/tcompreleitora2"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format">
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
                        Texto II: A filha de um casal venezuelano nasce em Belém.
                    </NormalText>
                </TextDiv>


                <TextDiv className="flex flex-col gap-5">
                    <Escrituario
                        text={["Bom   dia,  como   posso   ajudá-lo?"]}
                        phoneme={["['bõ     'dʒja,  'kõmʊ     'pɔsʊ      aʒu'dalʊ?]"]}
                    />

                    <Juan>
                        ¡Buenos días! Necesito de una información.
                    </Juan>

                    <Escrituario
                        text={["Sim!   Pois    não! "]}
                        phoneme={["['Sĩ!     'pojʃ     'nãw!] "]}
                    />

                    <Juan>
                        Mi hija nació aquí en Belém hace dos días. Y me gustaría saber cómo puedo sacar su Partida de Nacimiento.
                    </Juan>

                    <Escrituario
                        text={["Tu    consegues    me   entender?"]}
                        phoneme={["['tu        kõse'geʃ         'mI      ẽtẽ'deɾ?]"]}
                    />

                    <Juan>
                        Sí, comprendo el portugués, pero no hablo todavía.
                    </Juan>

                    <Escrituario
                        text={["Qual     a    tua    nacionalidade? "]}
                        phoneme={["['kawaw    'a    'twa      nasjõnaʎi'dadʒI?] "]}
                    />

                    <Juan>
                        Yo y mi mujer somos venezolanos. Tengo una duda.
                    </Juan>



                    <Escrituario
                        text={["Diga."]}
                        phoneme={["['dʒiga] "]}
                    />

                    <Juan>
                        ¿Mi hija será venezolana, como yo o será brasileña?
                    </Juan>


                    <Escrituario
                        text={["Segundo  o   artigo   12,    da    Constituição   Federal,   é  brasileiro   nato   os  nascidos  na   República   Federativa    do  Brasil,",
                            "ainda  que   de   pais   estrangeiros, desde  que  estes   não   estejam   a   serviço   de   seu   país”. "]}

                        phoneme={["[ se'gũdʊ     'ʊ   aɾ'tʃigʊ  'dozI,   'da      kõjʃtʃitwi'sãw       fɛdɛ'ɾaw,   'ɛ    bɾazi'lejɾʊ    'natʊ   'ʊʃ     na'sidʊʃ     'na     xe'publika       fɛdɛɾa'tʃiva      'dʊ   bɾa'ziw]",
                            "[a'ĩda     'kI     'dʒI   pa'iʃ       Iʃtɾã'ʒejɾʊʃ,       'deʃdʒI    'kI    'eʃtʃIʃ     'nãw      Iʃ'teʒãw   ' a     seɾ'visʊ   'dʒI   'sew   pa'iʃ]   "]}
                    />

                    <Juan>
                        ¿Qué eso quiere decir?
                    </Juan>

                    <Escrituario
                        text={["Vocês    estão   aqui   de   forma    oficial    a   serviço   da   Venezuela?"]}
                        phoneme={["[vo'sejʃ     Iʃ'tãw      a'kI    'dʒI    'fɔɾma     ofisi'aw   'a     seɾ'visʊ    'da     vẽnẽ'zwɛla?]  "]}
                    />

                    <Juan>
                        No. Somos refugiados.
                    </Juan>

                    <Escrituario
                        text={[" Muito  bem!   Então,  nesse   caso,   a   tua   filha   é   brasileira   pelo    critério    de   nacionalidade,",
                            "  o    qual   leva   em  consideração   o   local     de   nascimento,  logo,   poderá   ser   registrada,   sem  nenhum  problema."
                        ]}
                        phoneme={["['muĩtʊ   'bẽj!       ẽ'tãw,     'nesI       'kasʊ,    'a   'twa    'fiʎa    'ɛ     bɾazi'lejɾa    'pelʊ     kɾi'tɛɾiw    'dʒI     nasjõnaʎi'dadʒI]",
                            "['ʊ    'kwaw    lɛva     'ẽj       kõsidɛɾa'sãw      'ʊ   lɔ'kaw    'dʒI       nasi'mẽtʊ,       'lɔgʊ,     pode'ɾa    'seɾ       xeʒiʃ'tɾada,      'sẽj       nẽj'ũ       pɾɔ'blema]"
                        ]}

                    />

                    <Juan>
                        ¡Ah, qué bien! Gracias. Pero, ¿qué es necesario para eso?
                    </Juan>


                    <Escrituario
                        text={[" Preciso,   primeiro,   da   Declaração   de   nascido   vivo,   é   a   folha  amarela   fornecida   pela  maternidade. ",
                            "Em   que   hospital   tua   filha   nasceu?"]}

                        phoneme={["foɾne'sida     'pela    mateɾɲi'dadʒI] ",
                            "['ẽj     'kI       oʃpi'taw    'twa    'fiʎa     na'sew?] "]}
                    />

                    <Juan>
                        En Santa Casa.
                    </Juan>


                    <Escrituario
                        text={["Preciso   do      CPF;     Carteira   de  Registro   Nacional   Ide    Migrate    ou   Protocolo   de  Refúgio; ",
                            "comprovante   de   residência.   Todos   esses   documentos   tem   que   ser   teu   e   da   tua   esposa.",
                        ]}
                        phoneme={["[ pɾe'sizʊ    'dʊ   'se 'pe 'ɛfI;    kaɾ'tejɾa   'dʒI    xe'ʒiʃtɾʊ      nasjo'naw   'dʒI      mi'gɾãtʃI     'ow    pɾɔtɔ'kɔlʊ    'dʒI   xe'fuʒiʊ]  ",
                            "[   kõpɾɔ'vãtʃI      'dʒI     ɾesi'dẽsja.         'todʊʃ       'esIʃ         doku'mẽtʊʃ        'tẽj      'kI      'seɾ   'tew   'I    'da   'twa     eʃ'poza]"
                        ]}
                    />

                    <Juan>
                        Aquí están todos los documentos.
                    </Juan>


                    <Escrituario
                        text={["Quanto   tempo   estão    no   Brasil?"]}
                        phoneme={["[ 'kãtʊ        'tẽpʊ       Iʃ'tãw      'nʊ   bɾa'ziw?]"]}
                    />

                    <Juan>
                        Siete meses.
                    </Juan>

                    <Escrituario
                        text={[" Como   fica   a   questão   dos   sobrenomes   na   Venezuela? ",
                            "Pergunto,   porque   aqui   no   Brasil,   primeiro   vem   o   sobrenome   da   mãe   e   depois   o   do   pai."
                        ]}
                        phoneme={
                            ["['kõmʊ    'fika   'a      keʃ'tãw     'dʊʃ       sobɾI'nõmIʃ      'na     vẽne'zwela?]", "[peɾ'gũtʊ,       poɾ'ke      a'ki     'nʊ    bɾa'ziw,    pɾi'mejɾʊ     'vẽj     'ʊ     sobɾI'nõmI     'da     'mãI    'I     de'pojʃ    'ʊ   'dʊ   'paj]"
                            ]}
                    />

                    <Juan>
                        En mi país viene primero del padre y después de la madre.
                    </Juan>


                    <Escrituario
                        text={["Qual   é   o   nome  da   tua   filha?"]}
                        phoneme={
                            ["[ 'kwaw    'ɛ   'ʊ    'nõmI   'da    'twa   'fiʎa?] "]}
                    />


                    <Juan>
                        Ámbar Isabella.
                    </Juan>


                    <Escrituario
                        text={["    Ok!   Então,   vamos   registrar   a   Ámbar,   utilizando   dessa   forma   como   é   na   Venezuela. ", "Agora   é   só   aguardar.", "Daqui   a   pouco   entrego   a   Certidão   de   Nascimento   de   Ámbar   Gómez   Huérfano."
                        ]}
                        phoneme={["[o'kej!      ẽ'tãw,      'vãmʊʃ      xeʒiʃ'tɾaɾ   'a      'ãbaɾ,     utiʎi'zãdʊ       'dɛsa      'fɔɾma    'kõmʊ    'ɛ   'na     vẽne'zwela] ", "[a'gɔɾa   'ɛ   'sɔ    agwaɾ'daɾ] ", "['daki     'a   'powkʊ     ẽ'tɾɛgʊ     'a     seɾtʃi'dãw   'dʒI       nasi'mẽtʊ       'dʒI     'ãbaɾ        'gomIʃ      'weɾfanʊ]"]}
                    />


                </TextDiv>

            </div>
            <NavBar currentRoute={currentRoute} />

        </div>
    )

}


