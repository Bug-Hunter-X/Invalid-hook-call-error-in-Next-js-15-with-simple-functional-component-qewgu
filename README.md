# Next.js 15 Invalid Hook Call Bug

This repository demonstrates a strange bug encountered in Next.js 15 where a simple functional component throws an `Invalid hook call` error, even without using any hooks.  This behavior was not observed in Next.js 13.

## Bug Description

A basic Next.js functional component using `next/link` throws the error despite not containing any React hooks. The error message is misleading as no hooks are present.

## Steps to Reproduce

1.  Clone this repository.
2.  Run `npm install` to install dependencies.
3.  Run `npm run dev` to start the development server.
4. Observe the error in the browser's console.

## Potential Causes

The root cause is currently unknown. It might be related to a change in how Next.js 15 handles component rendering or a conflict with other packages.