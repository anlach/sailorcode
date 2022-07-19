<div class="sail">
    <div class="textbox">
        <h1>SAIL</h1>
    </div>
</div>
<div class="code">
    <div class="textbox">
        <h1>CODE</h1>
    </div>
    <div class="horizon-blur"></div>
    <svg>
        <line class="horizontal" x1="0" y1="0%" x2="100%" y2="0%"></line>
        <line class="horizontal" x1="0" y1="0%" x2="100%" y2="0%"></line>
        <line class="horizontal" x1="0" y1="0%" x2="100%" y2="0%"></line>
        <line class="horizontal" x1="0" y1="0%" x2="100%" y2="0%"></line>
        <line class="horizontal" x1="0" y1="0%" x2="100%" y2="0%"></line>
        <line class="horizontal" x1="0" y1="0%" x2="100%" y2="0%"></line>
        <line class="radial" x1="50%" y1="-3%" x2="0" y2="3%"></line>
        <line class="radial" x1="50%" y1="-3%" x2="0" y2="6%"></line>
        <line class="radial" x1="50%" y1="-3%" x2="0" y2="10%"></line>
        <line class="radial" x1="50%" y1="-3%" x2="0" y2="17%"></line>
        <line class="radial" x1="50%" y1="-3%" x2="0" y2="25%"></line>
        <line class="radial" x1="50%" y1="-3%" x2="0" y2="35%"></line>
        <line class="radial" x1="50%" y1="-3%" x2="0" y2="58%"></line>
        <line class="radial" x1="50%" y1="-3%" x2="0" y2="100%"></line>
        <line class="radial" x1="50%" y1="-3%" x2="0" y2="290%"></line>
        <line class="radial" x1="50%" y1="-3%" x2="100%" y2="3%"></line>
        <line class="radial" x1="50%" y1="-3%" x2="100%" y2="6%"></line>
        <line class="radial" x1="50%" y1="-3%" x2="100%" y2="10%"></line>
        <line class="radial" x1="50%" y1="-3%" x2="100%" y2="17%"></line>
        <line class="radial" x1="50%" y1="-3%" x2="100%" y2="25%"></line>
        <line class="radial" x1="50%" y1="-3%" x2="100%" y2="35%"></line>
        <line class="radial" x1="50%" y1="-3%" x2="100%" y2="58%"></line>
        <line class="radial" x1="50%" y1="-3%" x2="100%" y2="100%"></line>
        <line class="radial" x1="50%" y1="-3%" x2="100%" y2="290%"></line>
    </svg>
</div>

<style>
    :root {
        --gradient-color1: rgb(44, 70, 68);
        --half-gradient-color1: rgba(44, 70, 68, 0.5);
        --mid-color1-color2:rgb(24, 48, 42);
        --gradient-color2: rgb(4, 26, 16);
        --half-gradient-color2: rgba(4, 26, 16, 0.5);
    }
    * {
        /* border: 1px solid white; */
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-family: Geneva, Tahoma, sans-serif;
        font-size: 20px;
    }
    h1 {
        font-size: 4rem;
    }
    
    .sail {
        width: 100vw;
        height: 50vh;
        position: relative;
        background-image: url("./IMG_4543.JPG");
        background-position: center;
        background-size: cover;
    }
    .sail .textbox {
        bottom: 20%;
        left: 10%;
        position: absolute;
    }
    .sail h1 {
        color: rgb(70, 113, 207);
        text-shadow: 0 0 30px white;
    }
    
    .code {
        width: 100vw;
        height: 50vh;
        position: relative;
        background-color: var(--gradient-color2);
    }
    .code .textbox {
        top: 20%;
        right: 10%;
        z-index: 1;
        position: absolute;
    }
    .code .horizon-blur {
        height: 15%;
        width: 100%;
        position: absolute;
        top: 45%;
        background: linear-gradient(to top, green, rgb(0, 65, 0) 10%, var(--gradient-color2));
    }
    .code h1 {
        color: rgb(67, 226, 19);
        text-shadow: 0 0 30px rgb(51, 172, 15);
    }
    svg {
        width: 100%;
        height: 40%;
        position: absolute;
        top: 60%;
    }
    line {
        stroke: green;
    }
    .horizontal:first-of-type {
        animation-name: code-grid;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(1, 0,1,1);
    }
    .horizontal:nth-of-type(2) {
        animation-name: code-grid;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(1, 0,1,1);
        animation-delay: 0.5s;
    }
    .horizontal:nth-of-type(3) {
        animation-name: code-grid;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(1, 0,1,1);
        animation-delay: 1s;
    }
    .horizontal:nth-of-type(4) {
        animation-name: code-grid;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(1, 0,1,1);
        animation-delay: 1.5s;
    }
    
    @keyframes code-grid {
        to {
            transform: translateY(100%);
        } 
    }
    
    @media (max-width: 30rem) {
        h1 {
            font-size: 3rem;
        }
    }
</style>