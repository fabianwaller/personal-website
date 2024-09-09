import React from 'react'
import TypographyH1 from './ui/TypographyH1'
import { cn } from '@/lib/utils'
import Container from './Container'

type SectionProps = {
    name: string,
    title: string,
    subtitle: string,
    gradient?: string
    children: React.ReactNode
    className?: string
}

const Section = (props: SectionProps) => {
    return (
        <section className="py-8" id={props.name}>
            <div className="mb-12 text-center">
                <TypographyH1 className={`section__title ${props.gradient}`}>{props.title}</TypographyH1>
                <span className="text-sm block">{props.subtitle}</span>
            </div>

            <Container className={cn([`p-0`, props.className])}>
                {props.children}
            </Container>
        </section>
    )
}

export default Section