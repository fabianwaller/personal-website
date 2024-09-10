import React from 'react'
import { cn } from '@/lib/utils'
import Container from './Container'
import TypographyH2 from './ui/TypographyH2'

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
            <div className="mb-12 text-center">
                <TypographyH2 className={`section__title ${props.gradient}`}>{props.title}</TypographyH2>
                <span className="text-sm block">{props.subtitle}</span>
            </div>

            <Container className={cn([`p-0`, props.className])}>
                {props.children}
            </Container>
        </section>
    )
}

export default Section