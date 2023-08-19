import NormalText from "./normaltext";
import SpanishText, { PhonemeFont } from "./spanishtext";
import { Fragment } from 'react';

export default function TextDiv(props: any) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

export function Javier(props: any) {
    return (
        <div className={props.className}>
            <div className="font-bold text-xl">
                Javier:
            </div>
            <SpanishText>
                {props.children}
            </SpanishText>
        </div>
    );
}
export function Juan(props: any) {
    return (
        <div className={props.className}>
            <div className="font-bold text-xl">
                Juan:
            </div>
            <SpanishText>
                {props.children}
            </SpanishText>
        </div>
    );
}
export function Pilar(props: any) {
    return (
        <div className={props.className}>
            <div className="font-bold text-xl">
                Pilar:
            </div>
            <SpanishText>
                {props.children}
            </SpanishText>
        </div>
    );
}

interface TextProps {
    className?: string,
    text: string[],
    phoneme: string[],
}

export function AssistenteSocial(props: TextProps) {
    return (
        <div className={`flex flex-col gap-1 ${props.className}`}>
            <div className="font-bold text-xl">
                Assistente Social:
            </div>
            {props.text.map((text, index) => (
                <Fragment key={index}>
                    <NormalText>
                        {text}
                    </NormalText>
                    <PhonemeFont className="whitespace-pre-wrap">
                        {props.phoneme[index]}
                    </PhonemeFont>
                </Fragment>
            ))}
        </div>
    );
}

export function Escrituario(props: TextProps) {
    return (
        <div className={`flex flex-col gap-1 ${props.className}`}>
            <div className="font-bold text-xl">
                Escriturário do cartório:
            </div>
            {props.text.map((text, index) => (
                <Fragment key={index}>
                    <NormalText>
                        {text}
                    </NormalText>
                    <PhonemeFont className="whitespace-pre-wrap">
                        {props.phoneme[index]}
                    </PhonemeFont>
                </Fragment>
            ))}
        </div>
    );
}

export function Renata(props: TextProps) {
    return (
        <div className={`flex flex-col gap-1 ${props.className}`}>
            <div className="font-bold text-xl">
                Renata:
            </div>
            {props.text.map((text, index) => (
                <Fragment key={index}>
                    <NormalText>
                        {text}
                    </NormalText>
                    <PhonemeFont className="whitespace-pre-wrap">
                        {props.phoneme[index]}
                    </PhonemeFont>
                </Fragment>
            ))}
        </div>
    );
}