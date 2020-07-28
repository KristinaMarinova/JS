const View = (data, method, id, clearForm, formData) => {
    const catches = document.getElementById('catches');
    const handler = {
      GET: populateData,
      POST: addCatch,
      DELETE: deleteCatch,
      PUT: updateCatch,
    };
  
    handler[method](data);
  
    function createELem(tag, text = '', className = '', attributes = []) {
      const elem = document.createElement(tag);
      elem.className = className;
      attributes.map(e => elem.setAttribute(e[0], e[1]));
      elem.textContent = text || '';
      return elem;
    }
  
    function addSingleCatch(i, d) {
      const populate = createELem('div', undefined, 'catch', [['data-id', i]]);
  
      Object.entries(d).forEach(e => {
        let type = e[0] !== 'weight' && e[0] !== 'captureTime' ? 'text' : 'number';
        populate.appendChild(createELem('label', e[0]));
        populate.appendChild(createELem('input', undefined, e[0], [['type', type],['value', e[1]]])); // prettier-ignore
        populate.appendChild(document.createElement('hr'));
      });
      populate.appendChild(createELem('button', 'Update', 'update'));
      populate.appendChild(createELem('button', 'Delete', 'delete'));
      catches.appendChild(populate);
    }
  
    function populateData(data) {
      Array.from(catches.childNodes).map(e => e.remove());
      Object.entries(data || {}).forEach(e => addSingleCatch(e[0], e[1]));
    }
  
    function deleteCatch() {
      document.querySelector(`div[data-id=${id}]`).remove();
    }
  
    function addCatch() {
      addSingleCatch(id, formData);
      clearForm();
    }
  
    function updateCatch() {}
  };
  export default View;