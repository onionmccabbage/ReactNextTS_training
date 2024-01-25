
// the presence of a <form> tag makes the browser implement basic validation
<form>
    {/* the browser will enforce 'required' */}
    <input placeholder='promp' required />
    {/* the browser will enforce facets */}
    <input type='number' min='1' max='12' step='2' />
    {/* same for radio, for email, url, range, checbox */}
    <textarea>
        takes open and close tags
    </textarea>
    {/* the select element takes the data binding and change binging */}
    <select onChange={} value={}>
        {/* static option */}
        <option>Choose one...</option>
        {/* iterate values into the select (array.map) */}
        <option></option>
    </select>

</form>