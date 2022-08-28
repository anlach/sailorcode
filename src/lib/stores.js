import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';

export const timeIndex = tweened(0, {
    duration: 400,
    easing: cubicOut
});