import Canvas from '../components/Canvas'

export default function Body() {
  return (
    <div className="content">
       <section className='offset-header full-height background-color-black justify-bottom small-padding '>
          <div id="events">
            {/* <h2>Program</h2> */}
            <div>
              <div className='event'>
                <span className='text-sm'>Screening</span>
                <p><a href='https://www.pbs.org/independentlens/documentaries/we-still-live-here/'>We Still Live Here</a></p>
                <div className='text-sm'>
                  <p>Friday, May 2  at  2pm</p>
                </div>
                <p className='text-sm'>Directed by Anne Makepeace, the film tells the powerful story of the Wampanoag people and their efforts to reclaim their language and cultural identity. </p>
              </div>
              <div className='event'>
                <span className='text-sm'>Watch Online</span>
                <p><a href='https://upstanderproject.org/films/dawnland'>Dawnland</a></p>
                <p className='text-sm'>Dawnland is the untold story of Indigenous child removal in the US through the nation's first-ever government-endorsed truth and reconciliation commission, which investigated the devastating impact of Maine’s child welfare practices on the Wabanaki people.</p>
              </div>
              <div className='event'>
                <span className='text-sm'>Event</span>
                <p>Stickball in the Yard</p>
                <div className='text-sm'>
                  <p>Thursday, May 1  at  8pm</p>
                </div>                <p className='text-sm'>Come watch a game of casual stickball in the Harvard Yard! Organized by James Walkingstick.</p>
              </div>
              <div className='event'>
                <span className='text-sm'>Watch Online</span>
                <p>Yintah</p>
                <div className='text-sm'>
                  <p>Available on Netflix</p>
                </div>                <p className='text-sm'>A focus on the impact on the lives of the Wet'suwet'en people who live on unceded territory, as they oppose the construction of multiple infrastructure projects</p>
              </div>
            </div>
          </div>
          {/* <div className='spacer_2-3'></div> */}
            <p><b>STRATA</b> references the physical form of recent archeologic dig sites near the location of the 17th century Indian College. The installation takes a theoretical container of extracted earth and presents it above ground as an activation of public space and as a counterpoint to the mythologies of Harvard's origin. In the evening, this geotextile structure doubles as a screening space for various Indigenous-directed and featured films, co-curated with the Harvard University Native American Program.
            </p>

        </section>
        <section id="site" className='full-height justify-bottom small-padding'></section>
        <section id="site" className=' small-padding background-color-black'>
          <div className='spacer'></div>
          <div>
          <p>The construction of the Indian College was shaped by Harvard’s early financial hardship and by the Charter of 1650, which committed to "the education of English and Indian youth.” Recent archaeological digs uncovered brick from the structure; ceramics, pipes, and other items offered insights into the lives of the resident English and Native American students; as well as lead movable type from the production of the first Bible translated into an Indigenous North American language. These artifacts were found below more recent layers of soil marked by contemporary life: petrochemical deposits, modern currency, and other traces of the Anthropocene. </p>

          <p>These material layers evidence a continuum of interconnected processes that began as a settler-colonial project, and unfolded across time and space into our present moment—transformed, but embedded. This ephemeral architectural installation offers a visual realignment of the Old Yard toward Harvard’s complicated relationship with the Indigenous people of North America and founding institutional motivations. The project brings together students, faculty, artists, and the local community to engage with these temporalities, layers, and evolving stories.</p>
          </div>
        </section>

        <section id="info" className=' justify-bottom  background-color-black'>
          <div className='spacer'></div>
          <div>
          <p>Ignacio Lira Montes</p>
          <p>Eric Rannestad</p>
          <p>Victoria Suarez Ramos</p>
          </div>
        </section>

    </div>
    );
}