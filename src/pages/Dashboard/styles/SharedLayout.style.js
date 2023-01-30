import styled from 'styled-components';

const SharedLayoutWrapper = styled.section`
  position: relative;
  /* overflow: hidden; */
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 90vw;
    padding: 4rem 0 0 2rem;
    margin: 0 auto;
  }
  .cover {
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .resize {
    width: calc(100% - 250px);
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;
export default SharedLayoutWrapper;
