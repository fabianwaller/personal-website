import React from 'react'
import { cn } from '@/lib/utils'
import Container from './Container'
import TypographyH2 from './ui/TypographyH2'
import Subtitle from './ui/Subtitle'

type SectionProps = {
    name: string,
    title: string,
    subtitle: string,
    gradient?: string
    children: React.ReactNode
    className?: string
}

const Section: React.FC<SectionProps> = (props) => {
    return (
        <section className="py-8" id={props.name}>
            <div className="mb-12 text-center ">
                <TypographyH2 className={`section__title ${props.gradient}`}>{props.title}</TypographyH2>
                <Subtitle>{props.subtitle}</Subtitle>
            </div>

            <Container className={cn([`p-0 `, props.className])}>
                {props.children}
            </Container>
        </section>
    )
}

export default Section