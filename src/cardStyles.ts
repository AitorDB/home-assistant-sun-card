import { css } from 'lit'

export default css`
  .sun-card {
    --sun-card-primary: var(--primary-text-color, #000000);
    --sun-card-secondary: var(--secondary-text-color, #828282);
    --sun-card-accent: #d7d7d7;

    --sun-card-lines: var(--sun-card-accent);
    --sun-card-field-name-color: var(--sun-card-secondary);
    --sun-card-field-value-color: var(--sun-card-primary);

    --sun-card-stop-invisible: rgb(0,0,0,0);
    --sun-card-stop-sun-color: #f9d05e;
    --sun-card-stop-dawn-color: #393b78;
    --sun-card-stop-day-color: #8ebeeb;
    --sun-card-stop-dusk-color: #393b78;

    padding: 0.5rem;
    font-size: 1.3rem;
    font-family: var(--primary-font-family);
  }

  .sun-card.sun-card-dark {
    --sun-card-primary: #ffffff;
    --sun-card-secondary: #828282;
    --sun-card-accent: #464646;
  }
  
  .sun-card-field-row {
    display: flex;
    justify-content: space-around;
    margin: 1rem 1.5rem 0 1.5rem;
  }

  .sun-card-text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sun-card-field-name {
    color: var(--sun-card-field-name-color);
  }

  .sun-card-field-value {
    color: var(--sun-card-field-value-color);
  }

  .sun-card-header {
    display: flex;
    justify-content: space-between;
    margin: 0 4rem 0 4rem;
  }

  .sun-card-header .sun-card-field-value {
    font-size: 1.85rem;
  }

  .sun-card-title {
    margin: 0.5rem 0.5rem 3rem 3rem;
    font-size: 2rem;
    font-weight: 500;
    color: var(--sun-card-primary);
  }

  .sun-card-graph {
    shape-rendering="geometricPrecision";
    margin: 2rem 0 2rem 0;
  }

  .sun-card-graph .sunInitialStop {
    stop-color: var(--sun-card-stop-sun-color);
  }

  .sun-card-graph .sunMiddleStop {
    stop-color: var(--sun-card-stop-sun-color);
  }

  .sun-card-graph .sunEndStop {
    stop-color: var(--sun-card-stop-invisible);
  }

  .sun-card-graph .dawnInitialStop {
    stop-color: var(--sun-card-stop-dawn-color);
  }

  .sun-card-graph .dawnMiddleStop {
    stop-color: var(--sun-card-stop-dawn-color);
  }

  .sun-card-graph .dawnEndStop {
    stop-color: var(--sun-card-stop-invisible);
  }

  .sun-card-graph .dayInitialStop {
    stop-color: var(--sun-card-stop-day-color);
  }

  .sun-card-graph .dayMiddleStop {
    stop-color: var(--sun-card-stop-day-color);
  }

  .sun-card-graph .dayEndStop {
    stop-color: var(--sun-card-stop-invisible);
  }

  .sun-card-graph .duskInitialStop {
    stop-color: var(--sun-card-stop-dusk-color);
  }

  .sun-card-graph .duskMiddleStop {
    stop-color: var(--sun-card-stop-dusk-color);
  }

  .sun-card-graph .duskEndStop {
    stop-color: var(--sun-card-stop-invisible);
  }

  .card-config ul {
    list-style: none;
    padding: 0 0 0 1.5rem;
  }

  .card-config li {
    padding: 0.5rem 0;
  }
`
