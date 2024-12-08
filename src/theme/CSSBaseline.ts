const CssBaseline = {
  styleOverrides: () => `
    #root {
      display: flex;
      flex-direction: column;
      min-height: 100vh;

      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

      --container-max-width: calc(100% - 2.5rem);
      --content-L-max-width: 37.5rem;
      --content-S-max-width: 50%;
      --button-max-width: 100%;
      @media (min-width: 601px) {
        --container-max-width: min(calc(100% - 2.5rem), 800px);
        --content-S-max-width: 20rem;
        --button-max-width: var(--content-S-max-width);
      }

    }

    /* JOSH COMEAU CSS RESET - source: https://www.joshwcomeau.com/css/custom-css-reset/ */

    /* 1. Use a more-intuitive box-sizing model */
    *, *::before, *::after {
      box-sizing: border-box;
    }

    /* 2. Remove default margin */
    * {
      margin: 0;
    }

    body {
      /* 3. Add accessible line-height */
      line-height: 1.5;
      /* 4. Improve text rendering */
      -webkit-font-smoothing: antialiased;
    }

    /* 5. Improve media defaults */
    img, picture, video, canvas, svg {
      display: block;
      max-width: 100%;
    }

    /* 6. Inherit fonts for form controls */
    input, button, textarea, select {
      font: inherit;
    }

    /* 7. Avoid text overflows */
    p, h1, h2, h3, h4, h5, h6 {
      overflow-wrap: break-word;
    }

    /* 8. Improve line wrapping */
    p {
      text-wrap: pretty;
    }
    h1, h2, h3, h4, h5, h6 {
      text-wrap: balance;
    }

    /*
      9. Create a root stacking context
    */
    #root, #__next {
      isolation: isolate;
    }
  }
`,
}

export default CssBaseline
