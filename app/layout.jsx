import Provider from '@components/Provider'
import Nav from '@components/nav'
import '@styles/globals.css'
export const metadata = {
  title: "Pomodoro Based To-Do Application",
  description: "Web-based to-do list app that implements the Pomodoro Technique, along with an analytics dashboard to track task completion and productivity."
}
const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
