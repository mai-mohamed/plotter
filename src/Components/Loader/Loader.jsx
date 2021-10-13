import "./Loader.css";
export const Loader = () => {
  return (
    <div class="d-flex justify-content-center loader align-items-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default Loader;
