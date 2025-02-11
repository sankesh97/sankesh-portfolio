import Form from 'next/form';

export default function page() {
  return (
    <>
      <section></section>
      <section></section>
      <section></section>
      <section className="py-20">
        <h3 className="uppercase text-4xl text-center">Let&apos;s build something great together!</h3>
        <div className="flex flex-col text-center justify-center my-10 mx-20 orange-bg rounded-2xl p-10">
          <h4 className="font-semibold">Got a project in mind? Drop me a message, and I&apos;ll be in touch soon!</h4>
          <Form>
            <input type="text" placeholder="Name" />
            <input type='email' placeholder="Email" />
            <input type="tel" placeholder="Phone Number" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
            <input type='text' placeholder="Company" />
            <input type='url' placeholder="Website" />
            <textarea placeholder="Message" />
            <button type="submit" className='uppercase text-white bg-erie-black'>Submit Form</button>

          </Form>
        </div>
      </section >
    </>
  );
}
