import Canvas from '../components/Canvas'

export default function Body() {
  return (
    <div className="content">
       <section className='full-height justify-bottom small-padding '>
          <div className='spacer_2-3'></div>
          <p><b>STRATA</b> (<i>There Are Always Tracks to Follow</i>) is an abstract representation of an excavation site based on previous archaeological digs near the site of the Harvard Indian College. It is a theoretical container of extracted earth, presented above the ground as an activation of public space and counterpoint to the mythologies of Harvard's origin. In the evening, this fabric structure doubles as a screen for the projection of indigenous-directed and featured films. Taken together, it an installation concerned with our present moment, and with layers of sediment yet to be deposited.</p>
        </section>
        
        <section id="site" className='full-height justify-bottom small-padding background-color-black'>
          <div className='spacer'></div>
          <div>
          <p>The Harvard Indian College, a two-story brick building, stood from 1633 until its dismantling in 1698. The Old College served as a multipurpose structure that included residences, as well as academic, dining, and kitchen spaces. The Indian College housed students from New England, Native American tribes, English students, and the first printing press in the American colonies. The Charter of 1630 dedicated Harvard “to the education of English and Indian Youth of this country in knowledge and godliness.</p>

          <p>Bricks of the Harvard Indian College, ceramics, old nails, and lead block type from the printing of the Eliot Bible, are examples of artifacts unearthed here. These objects, found in the depths of the excavation site, mark a history where the 17th century settler-colonial project interfaced with the region’s indigenous Massachusett, Wampanoag, and Nipmuck peoples through trade and exchange, but also violence, manipulation, and territorial dispossession.</p>

          <p>In the evening, the structure transforms into a hybrid space of conversation and film screenings. Co-curated with the Harvard University Native American Program, these films present current indigenous stories.</p>
          </div>
        </section>

        <section id="events" className=' justify-bottom  background-color-black'>
          <div className='spacer'></div>
          <div>
          <p>We Still Live Here</p>

          <p>Dawnland</p>

          <p>Yintah</p>
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