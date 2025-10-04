
import * as React from "react";
export function Card(props: React.HTMLAttributes<HTMLDivElement>) { return <div {...props} className={`card ${props.className||""}`} /> }
export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) { return <div {...props} className={`p-0 ${props.className||""}`} /> }
export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) { return <div {...props} className={`p-6 ${props.className||""}`} /> }
export function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>) { return <h3 {...props} className={`text-lg font-semibold ${props.className||""}`} /> }
