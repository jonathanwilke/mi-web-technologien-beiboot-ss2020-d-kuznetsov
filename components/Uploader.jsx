import imageService from "../image-service";
import { useAppContext } from "../context";

function Uploader() {
  const { setImages, setIsLoading } = useAppContext();
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsLoading(true);
      await imageService.uploadImage(file);
      const res = await imageService.fetchImages();
      setImages(res.data);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        className="Uploader-fileInput"
        onChange={handleFileChange}
      />
      <label htmlFor="fileInput" className="Uploader-label">
        <button className="Uploader-addImage">+</button>
      </label>
    </div>
  );
}

export default Uploader;
