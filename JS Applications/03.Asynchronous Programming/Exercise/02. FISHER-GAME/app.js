import Request from '/Request.js';
import View from '/View.js';
import { addFormData, clearFormData, getBtns, getCatchId, methods } from '/Res.js';

const attachBtnListeners = () => getBtns().map(e => e.addEventListener('click', handleBtnClick));
const handleBtnClick = async e => {
  const elem = e.target;
  const method = methods[elem.className];
  const data = elem.getAttribute('data-id') || addFormData();
  const res = await Request(getCatchId(e), method, data);
  View(res, method, getCatchId(e), clearFormData, addFormData());
  attachBtnListeners();
};

attachBtnListeners();