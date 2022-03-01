import { getUniqueId } from "./utils";

const formatUserCount = (userCount) => {
  return (userCount / 10000).toFixed(1) + "만명";
};

const getComponentsTemplate = (components) => {
  return components?.reduce((tags, component) => {
    tags += component.template();
    return tags;
  }, "");
};

const updateNodeClasses = (target, className) => {
  [...target.parentNode.children].forEach((node) => {
    node.classList.remove(className);
  });
  target.classList.add(className);
};

const getUniqueNodeId = (nodeId) => {
  return `${nodeId}-${getUniqueId()}`;
};

export {
  formatUserCount,
  getComponentsTemplate,
  updateNodeClasses,
  getUniqueNodeId,
};
