<script>
	import Sail from '$lib/Sail.svelte';
	import Code from '$lib/Code.svelte';

    let grow = false; 
    let shrink = false;


    function sailClick() {
        if (grow){
            grow = false;
        } else if (shrink) {
            shrink = false;
            grow = true;
        } else {
            grow = true;
        }
    }
    function codeClick() {
        if (grow){
            shrink = true;
            grow = false;
        } else if (shrink) {
            shrink = false;
        } else {
            shrink = true;
        }
    }
</script>

<!-- style:height={height} -->
<div id="sail-box" class:grow class:shrink
 on:click={sailClick}>
	<Sail />
</div>
<div id="code-box" on:click={codeClick}>
	<Code />
</div>

<style>
    #sail-box {
        height: 50vh;
        transition: height 0.5s;
    }
    #sail-box.grow {
        height: 90vh;
        transition: height 0.5s;
    }
    #sail-box.shrink {
        height: 10vh;
        transition: height 0.5s;
    }

    #code-box {
        position: relative;
        flex-grow: 1;
    }
</style>
