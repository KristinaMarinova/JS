export const getBtns = () => [...(document.getElementsByTagName('button') || [])];
export const methods = { load: 'GET', add: 'POST', delete: 'DELETE', update: 'PUT' };
export const addFormData = () => {
  const obj = {};
  [...document.getElementById('addForm').getElementsByTagName('input')].map(e => (obj[e.className] = e.value));
  return obj;
};
export const clearFormData = () =>
  [...document.getElementById('addForm').getElementsByTagName('input')].map(e => (e.value = ''));
export const getCatchId = x => x.target.parentElement.getAttribute('data-id');