import { css } from 'lit-element'

export default css`
  .sun-card {
    --sun-card-lines: #464646;
    --sun-card-text-color: #fff;
    --sun-card-subtitle-color: #fff;

    color: var(--sun-card-text-color);
    padding: 1rem;
  }

  .sun-card-body {
    padding-top: 0.5rem;
  }

  .sun-card.sun-card-light {
    --sun-card-lines: #ececec;
    --sun-card-text-color: #000;
    --sun-card-subtitle-color: #828282;
  }

  .sun-card-header {
    display: flex;
    justify-content: space-between;
  }
  
  .sun-card-footer .sun-card-footer-row {
    display: flex;
    justify-content: space-around;
    padding-top: 1.5rem;
  }

  .sun-card-title {
    font-size: 1.5rem;
    font-weight: 500;
    padding-bottom: 2rem;
    margin: 0;
  }

  .sun-card-text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sun-card-header .sun-card-text-subtitle {
    font-size: 1.15rem;
    font-weight: 400;
    padding-bottom: 0.25rem;
    color: var(--sun-card-subtitle-color);
  }

  .sun-card-header .sun-card-text-time {
    font-size: 1.85rem;
    font-weight: 400;
  }

  .sun-card-footer .sun-card-text-subtitle {
    font-size: 1.25rem;
    font-weight: 400;
    padding-bottom: 0.5rem;
    color: var(--sun-card-subtitle-color);
  }

  .sun-card-footer .sun-card-text-time {
    font-size: 1.25rem;
    font-weight: 500;
  }

  .sun-card-text-time-period {
    font-size: 0.75rem;
  }
`
