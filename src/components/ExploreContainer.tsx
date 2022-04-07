import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <video width="320" height="240" controls>
        <source src='./video/samplevid.mp4' type="video/mp4" />
      </video>
    </div>
  );
};

export default ExploreContainer;
