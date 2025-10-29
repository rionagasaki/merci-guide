import { NotionAPI } from 'notion-client'
import { NotionPage } from '../../components/NotionPage'

export const revalidate = 3600 // ISR: 1時間ごとに再生成

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
