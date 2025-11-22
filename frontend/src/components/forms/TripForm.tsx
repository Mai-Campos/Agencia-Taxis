import SubmitBtn from '../ui/SubmitBtn.astro'

function TripForm() {
  return (
    <section className="body-font container mx-auto px-5 py-24">
      <div className="mb-12 flex w-full flex-col text-center">
        <h1 className="title-font mb-2 text-2xl font-bold sm:text-3xl">
          Traslados
        </h1>
        <p className="text-text-secondary mx-auto text-base lg:w-2/3">
          Traslados entre aeropuertos y casas de alquiler
        </p>
      </div>

      <div className="mx-auto md:w-2/3 lg:w-1/2">
        <form action="" className="-m-2 flex flex-wrap">
          <div className="w-full p-2 sm:w-1/2">
            <label className="text-text-secondary text-sm leading-7">
              Name
              <input type="text" name="ownerName" className="input-component" />
            </label>
          </div>

          <div className="w-full p-2 sm:w-1/2">
            <label className="text-text-secondary text-sm leading-7">
              Email
              <input type="email" name="email" className="input-component" />
            </label>
          </div>

          <div className="w-full p-2 sm:w-1/2">
            <label className="text-text-secondary text-sm leading-7">
              Pick up location
              <input
                type="text"
                name="pickupLocation"
                className="input-component"
              />
            </label>
          </div>

          <div className="w-full p-2 sm:w-1/2">
            <label className="text-text-secondary text-sm leading-7">
              Destination
              <input
                type="text"
                name="destination"
                className="input-component"
              />
            </label>
          </div>

          <div className="w-1/2 p-2">
            <label className="text-text-secondary text-sm leading-7">
              Pick up date
              <input
                type="date"
                name="pickupDate"
                className="input-component"
              />
            </label>
          </div>

          <div className="w-1/2 p-2">
            <label className="text-text-secondary text-sm leading-7">
              Pick up time
              <input
                type="time"
                name="pickupTime"
                className="input-component"
              />
            </label>
          </div>

          <div className="w-1/2 p-2">
            <label className="text-text-secondary text-sm leading-7">
              Passengers
              <input
                type="number"
                name="passengers"
                className="input-component"
              />
            </label>
          </div>

          <div className="w-1/2 p-2 sm:w-1/3">
            <label className="text-text-secondary text-sm leading-7">
              Vehicle
              <select name="passengers" className="input-component">
                <option value="taxi">Taxi</option>
                <option value="classNameic-car">Auto Clasico</option>
                <option value="van">Van</option>
              </select>
            </label>
          </div>

          <div className="w-1/2 p-2">
            <label className="text-text-secondary text-sm leading-7">
              Guia turistico
              <input
                type="checkbox"
                name="withGuide"
                className="input-component"
              />
            </label>
          </div>

          <div className="w-full p-2">
            <label className="text-text-secondary text-sm leading-7">
              Comments
              <textarea
                name="comments"
                className="textarea-component"
              ></textarea>
            </label>
          </div>

          <div className="flex w-full items-center justify-center p-2">
            <SubmitBtn />
          </div>
        </form>
      </div>
    </section>
  )
}

export default TripForm
