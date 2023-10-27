export const findRootParent = (childNode, tree) => {
  if (!childNode.parentId) return childNode;
  let parent;
  const traverse = (node) => {
    if (node.children.length === 0) return;
    if (node.id === childNode.parentId) {
      return parent;
    } else {
      for (const child of node.children) {
        const result = traverse(child);
        if (result) return result;
      }
    }
    return null;
  };

  for (parent of tree) {
    const finalResult = traverse(parent);
    if (finalResult) return finalResult;
  }
  return parent;
};

export const toggleChildren = (data, targetId) => {
  for (const item of data) {
    if (item.id === targetId) {
      item.isChecked =  !item.isChecked
      return true;
    }
    if (item.children) {
      const found = toggleChildren(item.children, targetId);
      if (found) {
        item.isChecked = true
        return true;
      }
    }
  }
  return false;
};
