"use client";

import dynamic from "next/dynamic";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";

// サードパーティコンポーネントを動的インポート
const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then((m) => m.Code)
);
const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
);
const Pdf = dynamic(
  () => import("react-notion-x/build/third-party/pdf").then((m) => m.Pdf),
  {
    ssr: false,
  }
);
const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  {
    ssr: false,
  }
);

export function NotionPage({
  recordMap,
  rootPageId,
}: {
  recordMap: ExtendedRecordMap;
  rootPageId: string;
}) {
  if (!recordMap) {
    return null;
  }

  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      darkMode={false}
      showTableOfContents={true}
      rootPageId={rootPageId}
      disableHeader={false}
      components={{ Code, Equation, Pdf, Modal }}
    />
  );
}
