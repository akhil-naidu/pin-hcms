import NiceSelect from '@/app/(app)/_components/ui/niceSelect'

const ContactForm = () => {
  const selectHandler = (value: any) => {}

  // use formik

  return (
    <form id='contact-form'>
      <div className='row'>
        <div className='col-xxl-6 col-xl-6 col-lg-6'>
          <div className='single-input-field'>
            <input name='name' type='text' placeholder='Your Name' id='name' />
            <i className='fas fa-user'></i>
          </div>
        </div>
        <div className='col-xxl-6 col-xl-6 col-lg-6'>
          <div className='single-input-field'>
            <input
              name='email'
              type='email'
              placeholder='Email Adress'
              id='email'
            />
            <i className='fas fa-envelope'></i>
          </div>
        </div>
        <div className='col-xxl-6 col-xl-6 col-lg-6'>
          <div className='single-input-field'>
            <input name='phone' type='text' placeholder='Phone' id='phone' />
            <i className='fas fa-phone-alt'></i>
          </div>
        </div>
        <div className='col-xxl-6 col-xl-6 col-lg-6'>
          <div className='single-input-field select'>
            <NiceSelect
              options={[
                { value: 'Select Subject', text: 'Select Subject' },
                { value: 'Subject One', text: 'Subject One' },
                { value: 'Subject Two', text: 'Subject Two' },
                { value: 'Subject Three', text: 'Subject Three' },
              ]}
              defaultCurrent={0}
              name='selectSubject'
            />
          </div>
        </div>
        <div className='col-xxl-12 col-xl-12 col-lg-12'>
          <div className='single-input-field textarea'>
            <textarea
              name='msg'
              rows={10}
              cols={10}
              id='msg'
              placeholder='Write Massage'></textarea>
            <i className='fas fa-edit'></i>
          </div>
        </div>
        <div className='col-xxl-12 col-xl-12'>
          <button type='submit' className='fill-btn clip-btn'>
            Send a message
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
