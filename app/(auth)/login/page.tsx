import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import GithubSignInButton from '@/app/components/GithubSignInButton'
import GoogleSignInButton from '@/app/components/GoogleSignInButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/utils/auth'
import { redirect } from 'next/navigation'

export default async function Login() {
    const session = await getServerSession(authOptions)

    if (session) {
        return redirect('/home')
    }
  return (
    <div className='mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14'>
        <form>
            <h1 className="text-3xl font-semibold text-white mb-4 text-center">Log In</h1>
            <div>
                <Input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block mb-4"
                />
                <Button
                    type="submit"
                    variant="destructive"
                    className="w-full bg-[#e50914] mb-2"
                >Log In</Button>
            </div>
        </form>

        <div className='text-gray-500 text-sm mt-2 text-center'>
            Don't have an account?{" "} 
            <Link className="text-white hover:underline" href="/sign-in">
                Sign In Now!
            </Link>
        </div>

        <div className='flex w-full justify-center items-center gap-x-3 mt-6'>
            <GithubSignInButton />
            <GoogleSignInButton />
        </div>
    </div>
  )
}