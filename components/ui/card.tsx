
import * as React from "react";
export function Card(props: React.HTMLAttributes<HTMLDivElement>) { return <div {...props} className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${props.className||""}`} /> }
export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) { return <div {...props} className={`p-0 ${props.className||""}`} /> }
export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) { return <div {...props} className={`p-4 ${props.className||""}`} /> }
export function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>) { return <h3 {...props} className={`text-lg font-semibold ${props.className||""}`} /> }
