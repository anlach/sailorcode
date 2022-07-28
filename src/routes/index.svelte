<script>
	import Sail from '$lib/Sail.svelte';
	import Code from '$lib/Code.svelte';

    let growSail = false; 
    let shrinkSail = false;


    function sailClick() {
        if (growSail){
            growSail = false;
        } else if (shrinkSail) {
            shrinkSail = false;
            growSail = true;
        } else {
            growSail = true;
        }
    }
    function codeClick() {
        if (growSail){
            shrinkSail = true;
            growSail = false;
        } else if (shrinkSail) {
            shrinkSail = false;
        } else {
            shrinkSail = true;
        }
    }
</script>

<!-- style:height={height} -->
<div id="sail-box" class:growSail class:shrinkSail
 on:click={sailClick}>
	<Sail grow={growSail} shrink={shrinkSail}/>
</div>
<div id="code-box" class:growSail class:shrinkSail
on:click={codeClick}>
	<Code grow={shrinkSail} shrink={growSail}/>
</div>

<style>
    #sail-box {
        position: relative;
        height: 50vh;
        transition: height 0.5s;
    }
    #sail-box.growSail {
        height: 90vh;
        transition: height 0.5s;
    }
    #sail-box.shrinkSail {
        height: 10vh;
        transition: height 0.5s;
    }

    #code-box {
        position: relative;
        height: 50vh;
		--gradient-color2: rgb(4, 26, 16);
        background-color: var(--gradient-color2);
        transition: height 0.5s;
    }
    #code-box.growSail {
        height: 10vh;
        transition: height 0.5s;
    }
    #code-box.shrinkSail {
        height: 90vh;
        transition: height 0.5s;
    }
</style>
