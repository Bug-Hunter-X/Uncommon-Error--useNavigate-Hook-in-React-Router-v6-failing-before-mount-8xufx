# React Router v6 useNavigate Hook Issue

This repository demonstrates a common, yet subtle, error encountered when using the `useNavigate` hook in React Router v6. The problem occurs when attempting to use `navigate` within a component's `useEffect` hook before the component has fully mounted.

## Problem Description

The `useNavigate` hook relies on the router context being available. If called before the component mounts, the context might not be properly initialized, resulting in unexpected behavior or errors.  This is particularly insidious because it may not always throw an error, but may simply not redirect.

## Solution

The solution involves ensuring that `useNavigate` is only called after the component has mounted and the context is available.  This is most easily done by adding a conditional check within the `useEffect` hook that delays the navigation until the component is ready.