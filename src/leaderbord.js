const mainUI = () => {
  const list = document.querySelector('.container');
  list.innerHTML = `
  <h1 class="my-5">Leaderbord</h1>
  <main class="row">
  <section id="recent-scores" class="col-md-6 px-3">
    <div id="recent-scores-head" class="d-flex justify-content-around">
      <h2>Recent Scores</h2>
      <button class="my-auto btn border border-dark">Refresh</button>
    </div>

    <div id="recent-score-body" class="px-md-3 mt-3 ">
      <table class="table table-striped table-sm table-hover border border-dark">
        <tbody>
          <tr>
            <td>Name</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>70</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>90</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>80</td>
          </tr>
          <tr class="row-3">
            <td>Name</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    
  </section>
     <div class="col-md-2"></div>
    <form action="#" method="POST" class="col-md-3 ps-2 d-flex flex-column">
      <h2 class="row px-2">Add your Scores</h2>
      <div class="row">
        <input type="text" class="input name-input" name="name" id="name" placeholder="Your name">
        <input type="number" class="input" name="score" id="score" placeholder="Your score">
      </div>
      <input type="submit" value="Submit" class="btn border border-dark me-0 align-self-end">
    </form>
  </main>`;
};

export { mainUI };