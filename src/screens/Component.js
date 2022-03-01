import { getUniqueNodeId } from "../serviceUtils";

function Component(target, state) {
  this.target = target;
  this.state = state || {};
  this.eventTypes = [];
  if (this.state.nodeId) {
    this.state.nodeId = getUniqueNodeId(this.state.nodeId);
  }
  this.render();
}

Component.prototype = {
  getElement() {
    return this.target.querySelector(`#${this.state.nodeId}`);
  },
  render() {
    this.target.innerHTML = this.template();
    this.removeEvent();
    this.setEvent();
  },
  template() {
    return ``;
  },
  removeEvent() {
    this.eventTypes.forEach(({ type, listener }) => {
      this.target.removeEventListener(type, listener);
    });
  },
  addEvent(eventType, selector, callback) {
    const children = [...this.target.querySelectorAll(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    const handleEventListener = (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    };
    this.eventTypes.push({ type: eventType, listener: handleEventListener });
    this.target.addEventListener(eventType, handleEventListener);
  },
  setEvent() {},
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  },
};

export default Component;
