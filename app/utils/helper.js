/**
 * Function to hide / scroll body content (Modal, Sidebar)
 * @param {boolean} display boolean to hide / show background body scroll on overlay
 */
const updateBgScroll = (display = true) => {
  const style = display ? 'auto' : 'hidden';
  document.querySelector('body').style.overflow = style;
};

const helpers = { updateBgScroll };
export default helpers;
