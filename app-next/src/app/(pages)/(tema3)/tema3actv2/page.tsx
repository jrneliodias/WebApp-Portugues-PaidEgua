
import NormalText from "@/app/components/basics/normaltext";
import { PhonemeFont } from "@/app/components/basics/spanishtext";
import TextDiv from "@/app/components/basics/text";
import LightColorCard, { WordCard } from "@/app/components/cards/card";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";



export default function Tema3Act2() {

    const currentRoute = "/tema3actv2"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format ">
                <span>
                    <b> Tema III - Atividade 2</b>
                </span>
                <div className="flex gap-4">
                    <IconBook />
                    <IconVolume />
                    <IconRefresh />
                </div>
            </div>
            <div className="body-text-layout">
                <TextDiv>
                    <NormalText>
                        Relaciona a expressão idiomática paraense com seu sentido correspondente em português
                    </NormalText>
                </TextDiv>

                <div className="grid grid-cols-2 gap-2 ">
                    <div className="flex flex-col gap-2">
                        <WordCard className="flex-col ">
                            <p>
                                <b>Tô brocado </b> hoje.
                            </p>
                            <PhonemeFont>['to bɾɔ'kadʊ]</PhonemeFont>
                        </WordCard>
                        <WordCard className="flex-col ">
                            <p>
                                Teu primo <b> levou o farelo.</b>
                            </p>
                            <PhonemeFont>
                                [le'vow ʊ fa'ɾɛlʊ]
                            </PhonemeFont>
                        </WordCard>
                        <WordCard className="flex-col ">
                            <p>
                                Paulo é muito <b>nó cego</b>.
                            </p>
                            <PhonemeFont>
                                ['nɔ 'sɛgʊ]
                            </PhonemeFont>
                        </WordCard>
                        <WordCard className="flex-col ">
                            <p>
                                Este mês eu <b>tô na roça</b>.
                            </p>
                            <PhonemeFont>
                                ['to 'na 'xɔsa]
                            </PhonemeFont>
                        </WordCard>
                        <WordCard className="flex-col ">
                            <p>
                                Esse filme é <b>muito firme</b>.
                            </p>
                            <PhonemeFont>
                                ['muĩtʊ fiɾmI]
                            </PhonemeFont>
                        </WordCard>
                        <WordCard className="flex-col ">
                            <p>
                                Ana <b>pegou o beco</b>.
                            </p>
                            <PhonemeFont>
                                [pe'gow 'ʊ 'bekʊ]
                            </PhonemeFont>
                        </WordCard>
                        <WordCard className="flex-col ">
                            <p>
                                <b>Té doidé ?</b>
                            </p>
                            <PhonemeFont>
                                ['tɛ doy'dɛ]
                            </PhonemeFont>
                        </WordCard>
                        <WordCard className="flex-col ">
                            <p>
                                <b> Tu és leso, é ?</b>
                            </p>
                            <PhonemeFont>
                                'tu 'ɛjʃ 'lɛzʊ, 'ɛ ?]
                            </PhonemeFont>

                        </WordCard>
                        <WordCard className="flex-col ">
                            <p>
                                <b>Dá teus pulos.</b>
                            </p>
                            <PhonemeFont>
                                ['da 'tewʃ 'pulʊʃ]
                            </PhonemeFont>
                        </WordCard>
                        <WordCard className="flex-col ">
                            <p>
                                José, <b>te acalma!</b>
                            </p>
                            <PhonemeFont>
                                ['tʃI a'kawma]
                            </PhonemeFont>
                        </WordCard>
                        <WordCard className="flex-col ">
                            <p>
                                <b>Tá na mão</b>, vou fazer o que me pedes.
                            </p>
                            <PhonemeFont>
                                ['ta na'mãw]
                            </PhonemeFont>
                        </WordCard>
                        <WordCard className="flex-col ">
                            <p>
                                <b>Eu choro</b>, se tens que trabalhar no feriado.
                            </p>
                            <PhonemeFont>
                                ['ew 'ʃɔɾʊ]
                            </PhonemeFont>
                        </WordCard>
                    </div>
                    <div className="flex flex-col gap-2">
                        <LightColorCard>É verdade!</LightColorCard>
                        <LightColorCard>Foi chamado atenção</LightColorCard>
                        <LightColorCard>Não</LightColorCard>
                        <LightColorCard>Está tudo confirmado</LightColorCard>
                        <LightColorCard>Fica tranquilo</LightColorCard>
                        <LightColorCard>Resolve teus problemas</LightColorCard>
                        <LightColorCard>Pessoa sem noção do que faz</LightColorCard>
                        <LightColorCard>Estou com fome</LightColorCard>
                        <LightColorCard>Sem dinheiro</LightColorCard>
                        <LightColorCard>Morreu</LightColorCard>
                        <LightColorCard>Pessoa com má conduta</LightColorCard>
                        <LightColorCard>Foi embora</LightColorCard>
                        <LightColorCard>Que absurdo!</LightColorCard>
                        <LightColorCard>Muito bom</LightColorCard>
                    </div>
                </div>
            </div>
            <NavBar currentRoute={currentRoute} />
        </div>
    )

}


