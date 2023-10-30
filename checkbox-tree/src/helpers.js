import data from "./data";

const buildTree = (response) => {
  console.log(response)
  const tree = [];
  const parent = {};

  for (let i = 0; i < response.length; i++) {
    parent[response[i].id] = response[i];
    parent[response[i].id].children = [];
    parent[response[i].id].isChecked = false;
  }

  for (let i = 0; i < response.length; i++) {
    if (response[i].parentId) {
        parent[response[i].parentId].children.push(response[i]);
    } else {
      tree.push(response[i]);
    }
  }

  return tree;
};

export const treeData = buildTree(data);

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

export const toggleParents = (tree, targetId) => {
  const toggleChildren = (node) => {
    if (!node.parentId) return;
    node.isChecked = false;
    node.children.forEach(toggleChildren);
  };

  for (const item of tree) {
    if (item.id === targetId) {
      item.isChecked = !item.isChecked;
      if (item.children.length > 0) {
        item.children.forEach(toggleChildren);
      }
      return true;
    }
    if (item.children) {
      const found = toggleParents(item.children, targetId);
      if (found) {
        item.isChecked = true;
        return true;
      }
    }
  }
  return false;
};

export const filterTree = (str) => {
  const sanitized = str.toLowerCase().trim();

  const newData = data.filter(
    (item) => item.name.toLowerCase().trim() !== sanitized
  );
  if (newData.length > 0) return buildTree(newData);
  else return buildTree(data);

  // const traverse = (node) => {
  //   if (node.name.toLowerCase().trim() === sanitized) return node;
  //   if (node.children.length === 0) return;
  //   else
  //     for (const child of node.children) {
  //       const result = traverse(child);
  //       if (result) return result;
  //     }
  //   return null;
  // };

  // for (let item of tree) {
  //   const result = traverse(item);
  //   if (result) {
  //     const rootParent = findRootParent(result, tree);
  //   }
  //   if (result) return result;
  // }
  // return null;
};
