import React from 'react';
import { useState } from 'react';
import './Form.scss';

function Form(props) {

  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [json, setJson] = useState('');

  const handleClick = (e) => {
    setMethod(e.target.id);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
      json: json,
    };
    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={(event) => setUrl(event.target.value)} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={handleClick}>GET</span>
          <span id="post" onClick={handleClick}>POST</span>
          <span id="put" onClick={handleClick}>PUT</span>
          <span id="delete" onClick={handleClick}>DELETE</span>
        </label>
        {method === 'post' && <textarea onChange={(event) => setJson(event.target.value)} />}
        {method === 'put' && <textarea onChange={(event) => setJson(event.target.value)} />}
      </form>
    </>
  );
}

export default Form;
