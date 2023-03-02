<script>
    import {FeedbackStore} from '../stores'
    import {fade, scale} from 'svelte/transition'
    import FeedBackItem from "./FeedBackItem.svelte";
    export let feedback = []

    console.log(feedback)
</script>

{#each $FeedbackStore as fb (fb.id)}
<div in:scale out:fade>
    <FeedBackItem item={fb}/>
</div>
{/each}