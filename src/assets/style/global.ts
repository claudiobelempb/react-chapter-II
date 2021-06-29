import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins');

/* Global Styles */

 :root {
    --light: ${(props) => props.theme.colors.light};
    --red: ${(props) => props.theme.colors.red};
    --blue: ${(props) => props.theme.colors.blue};
    --blue-light: ${(props) => props.theme.colors.blue_light};

    --dark: ${(props) => props.theme.colors.dark};
    --dark-light: ${(props) => props.theme.colors.dark_light};
    --white: ${(props) => props.theme.colors.white};
    --danger: ${(props) => props.theme.colors.danger};
    --success: ${(props) => props.theme.colors.success};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

   html, body, #root {
		height:100%;
    background: ${(props) => props.theme.colors.light};
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    /* line-height: 1.6; */
    color: var(--dark-light);

    @media(max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media(max-width: 720px) {
      font-size: 87.5%; // 14px
    }
	}

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  
  button, a {
    cursor: pointer;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }

  }

  body, input, textarea, button {
    border: 0;
    /* outline: 0; */
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .deposit {
    color: #33CC95;
  }

  .withdraw {
    color: #E52E4D;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: var(--light);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.2);
    }
  }

  a {
    color: var(--dark);
    text-decoration: none;
  }

  a:hover {
    color: #666;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  /* Utilities */
  .container {
    max-width: 1100px;
    margin: auto;
    overflow: hidden;
    padding: 0 2rem;
  }

  /* Text Styles*/
  .x-large {
    font-size: 4rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  .large {
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  .lead {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .text-center {
    text-align: center;
  }

  .text-primary {
    color: var(--blue);
  }

  .text-dark {
    color: var(--dark);
  }

  .text-success {
    color: var(--success);
  }

  .text-danger {
    color: var(--danger);
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .text-left {
    text-align: left;
  }

  /* Center All */
  .all-center {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  /* Cards */
  .card {
    padding: 1rem;
    border: #ccc 1px dotted;
    margin: 0.7rem 0;
  }

  /* List */
  .list {
    margin: 0.5rem 0;
  }

  .list li {
    padding-bottom: 0.3rem;
  }

  /* Padding */
  .p {
    padding: 0.5rem;
  }
  .p-1 {
    padding: 1rem;
  }
  .p-2 {
    padding: 2rem;
  }
  .p-3 {
    padding: 3rem;
  }
  .py {
    padding: 0.5rem 0;
  }
  .py-1 {
    padding: 1rem 0;
  }
  .py-2 {
    padding: 2rem 0;
  }
  .py-3 {
    padding: 3rem 0;
  }

  /* Margin */
  .m {
    margin: 0.5rem;
  }
  .m-1 {
    margin: 1rem;
  }
  .m-2 {
    margin: 2rem;
  }
  .m-3 {
    margin: 3rem;
  }
  .my {
    margin: 0.5rem 0;
  }
  .my-1 {
    margin: 1rem 0;
  }
  .my-2 {
    margin: 2rem 0;
  }
  .my-3 {
    margin: 3rem 0;
  }

  /* Grid */
  .grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }

  .grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }

  .grid-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
  }

  .btn {
    display: inline-block;
    background: var(--light);
    color: #333;
    padding: 0.4rem 1.3rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    margin-right: 0.5rem;
    transition: opacity 0.2s ease-in;
    outline: none;
  }

  .btn-link {
    background: none;
    padding: 0;
    margin: 0;
  }

  .btn-block {
    display: block;
    width: 100%;
  }

  .btn-sm {
    font-size: 0.8rem;
    padding: 0.3rem 1rem;
    margin-right: 0.2rem;
  }

  .badge {
    display: inline-block;
    font-size: 0.8rem;
    padding: 0.2rem 0.7rem;
    text-align: center;
    margin: 0.3rem;
    background: var(--light);
    color: #333;
    border-radius: 5px;
  }

  .alert {
    padding: 0.7rem;
    margin: 1rem 0;
    opacity: 0.9;
    background: var(--light);
    color: #333;
  }

  .btn-primary,
  .bg-primary,
  .badge-primary,
  .alert-primary {
    background: var(--blue);
    color: #fff;
  }

  .btn-light,
  .bg-light,
  .badge-light,
  .alert-light {
    background: var(--light);
    color: #333;
  }

  .btn-dark,
  .bg-dark,
  .badge-dark,
  .alert-dark {
    background: var(--dark);
    color: #fff;
  }

  .btn-danger,
  .bg-danger,
  .badge-danger,
  .alert-danger {
    background: var(--danger);
    color: #fff;
  }

  .btn-success,
  .bg-success,
  .badge-success,
  .alert-success {
    background: var(--success);
    color: #fff;
  }

  .btn-white,
  .bg-white,
  .badge-white,
  .alert-white {
    background: #fff;
    color: #333;
    border: #ccc solid 1px;
  }

  .btn:hover {
    opacity: 0.8;
  }

  .bg-light,
  .badge-light {
    border: #ccc solid 1px;
  }

  .round-img {
    border-radius: 50%;
  }

  /* Forms */
  input {
    margin: 1.2rem 0;
  }

  .form-text {
    display: block;
    margin-top: 0.3rem;
    color: #888;
  }

  input[type='text'],
  input[type='email'],
  input[type='password'],
  input[type='date'],
  select,
  textarea {
    display: block;
    width: 100%;
    padding: 0.4rem;
    font-size: 1.2rem;
    border: 1px solid #ccc;
  }

  input[type='submit'],
  button {
    font: inherit;
  }

  table th,
  table td {
    padding: 1rem;
    text-align: left;
  }

  table th {
    background: var(--light);
  }

  /* Navbar */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 2rem;
    z-index: 1;
    width: 100%;
    opacity: 0.9;
    margin-bottom: 1rem;
  }

  .navbar ul {
    display: flex;
  }

  .navbar a {
    color: #fff;
    padding: 0.45rem;
    margin: 0 0.25rem;
  }

  .navbar a:hover {
    color: var(--light);
  }

  .navbar .welcome span {
    margin-right: 0.6rem;
  }

  /* Mobile Styles */
  @media (max-width: 700px) {
    .hide-sm {
      display: none;
    }

    .grid-2,
    .grid-3,
    .grid-4 {
      grid-template-columns: 1fr;
    }

    /* Text Styles */
    .x-large {
      font-size: 3rem;
    }

    .large {
      font-size: 2rem;
    }

    .lead {
      font-size: 1rem;
    }

    /* Navbar */
    .navbar {
      display: block;
      text-align: center;
    }

    .navbar ul {
      text-align: center;
      justify-content: center;
    }
  }

  .font-zero {
    font-size: 0;
  }

`;