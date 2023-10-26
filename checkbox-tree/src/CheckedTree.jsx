export default function CheckedTree({ initData }) {
  return (
    <div className="checked-tree-container">
      {initData.map(({ id, name, parentId, isChecked }) => {
        return (
          <div key={id} className="checkbox-row">
            &gt;
            <input  type="checkbox" checked={isChecked} onClick={() => null}></input>
            <label htmlFor="checkbox">&nbsp;{name}</label>
          </div>
        );
      })}
    </div>
  );
}

CheckedTree.propTypes = {
  initData: [],
};
