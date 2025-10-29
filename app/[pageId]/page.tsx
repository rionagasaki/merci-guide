import { NotionAPI } from 'notion-client'
import { NotionPage } from '../../components/NotionPage'
import { getPageTitle, getPageProperty } from 'notion-utils'
import type { Metadata } from 'next'

export const revalidate = 3600 // ISR: 1時間ごとに再生成

export async function generateMetadata({ params }: { params: Promise<{ pageId: string }> }): Promise<Metadata> {
  const { pageId } = await params
  const notion = new NotionAPI()
  const recordMap = await notion.getPage(pageId)

  const title = getPageTitle(recordMap) || 'Merci Docs'
  const block = recordMap.block[pageId]?.value
  const coverImage = block?.format?.page_cover || '/og-image.png'

  return {
    title,
    openGraph: {
      title,
      images: [coverImage],
    },
    twitter: {
      title,
      images: [coverImage],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ pageId: string }> }) {
  const { pageId } = await params
  const notion = new NotionAPI()
  const recordMap = await notion.getPage(pageId)

  return <NotionPage recordMap={recordMap} rootPageId={pageId} />
}

export async function generateStaticParams() {
  // デフォルトのページID
  return [
    { pageId: '29b028b3ea628015a208f3c35af4a1c0' },
  ]
}
