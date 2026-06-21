import { useMemo, useState } from 'react'
import ModuleFolderIcon from '../components/ModuleFolderIcon'
import SectionHeader from '../components/SectionHeader'
import { productModules } from '../data/siteContent'

type ProductModule = {
  title: string
  shortTitle: string
  code: string
  category: string
  description: string
}

const dockItems = [
  { type: 'finder', label: 'Finder' },

  { type: 'pink', label: 'Runtime Policy' },
  { type: 'blue', label: 'Why Chain' },
  { type: 'cyan', label: 'Audit Ledger' },
  { type: 'purple', label: 'Control Center' },

  { type: 'pink', label: 'Shadow Discovery' },
  { type: 'blue', label: 'Usage Budgets' },
  { type: 'cyan', label: 'Notification Outbox' },
  { type: 'purple', label: 'Pilot Hardening' },

  { type: 'trash', label: 'Trash' },
]

function Modules() {
    const modules = useMemo<ProductModule[]>(
        () =>
            productModules.filter(
            (module) => module.title !== 'Dashboard & Control Center',
            ),
        [],
    )
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const activeModule = activeIndex === null ? null : modules[activeIndex]

  function openModule(index: number) {
    setActiveIndex(index)
  }

  function closeModule() {
    setActiveIndex(null)
  }

  return (
    <section
      id="modules"
      className="modules-desktop-section px-6 py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Modules"
          title="Open the governance stack like a control desktop"
          description="Browse Uninjectable modules as desktop folders. Click the modules that matter most to inspect their role in the runtime governance stack."
          variant="dark"
        />

        <div className="modules-desktop-shell mt-20">
            <div className="modules-desktop-menubar">
                <div className="flex items-center gap-2">
                    <span className="modules-window-dot bg-[#ff4fa3]" />
                    <span className="modules-window-dot bg-[#f59e0b]" />
                    <span className="modules-window-dot bg-[#22c55e]" />
                </div>

                <div className="modules-menubar-title">
                    Finder — Uninjectable Modules
                </div>

                <div className="hidden items-center gap-2 md:flex">
                    <span className="h-2 w-2 bg-green-400 shadow-[0_0_12px_rgba(34,197,94,0.7)]" />
                    <span className="font-mono-accent text-[10px] uppercase tracking-[0.18em] text-green-300">
                        Desktop online
                    </span>
                </div>
            </div>

            <div
                className="modules-desktop-wallpaper"
                style={{
                    backgroundImage: `linear-gradient(rgba(5, 8, 22, 0.38), rgba(5, 8, 22, 0.48)), url('${import.meta.env.BASE_URL}modules/modules-wallpaper.png')`,
                }}
            >
                <div className="modules-desktop-widget modules-widget-left">
                    <span className="modules-widget-dot" />
                    <div>
                    <p>Runtime monitor</p>
                    <span>{modules.length} modules online</span>
                    </div>
                </div>

                <div className="modules-desktop-widget modules-widget-right">
                    <span className="modules-widget-icon">◇</span>
                    <div>
                    <p>Policy sync</p>
                    <span>active</span>
                    </div>
                </div>

                <div className="modules-desktop-grid">
                {modules.map((module, index) => {
                    const isActive = index === activeIndex

                    return (
                    <button
                        key={module.title}
                        type="button"
                        onClick={() => openModule(index)}
                        className={`module-desktop-item ${
                        isActive ? 'module-desktop-item-active' : ''
                        }`}
                    >
                        <ModuleFolderIcon active={isActive} />

                        <span className="module-desktop-label">
                        {module.shortTitle}
                        </span>
                    </button>
                    )
                })}
                </div>

                {activeModule && (
                <div className="module-window-backdrop" onClick={closeModule}>
                    <div
                    className="module-floating-window"
                    onClick={(event) => event.stopPropagation()}
                    >
                    <div className="module-floating-body">
                        <div className="module-floating-header">
                            <div className="module-floating-icon">
                            <ModuleFolderIcon active />
                            </div>

                            <div>
                                <p className="module-floating-eyebrow">Module detail</p>

                                <h3>{activeModule.title}</h3>

                                <div className="module-floating-chips">
                                    <span className="module-chip">{activeModule.code}</span>
                                    <span className="module-chip module-chip-pink">
                                    {activeModule.category}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="module-floating-description">
                            {activeModule.description}
                        </p>

                        <div className="module-floating-meta">
                            <div>
                                <span>Path</span>
                                <p>./modules/{activeModule.code.toLowerCase()}</p>
                                </div>

                                    <div>
                                        <span>Status</span>
                                        <p>governance_ready</p>
                                    </div>

                                <div>
                                    <span>Mode</span>
                                    <p>runtime_control</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}

                <div className="modules-desktop-dock">
                    <div className="modules-dock-track">
                        {dockItems.map((item) => (
                        <button
                            key={item.label}
                            type="button"
                            className={`modules-dock-item modules-dock-item-${item.type}`}
                            data-label={item.label}
                            aria-label={item.label}
                        >
                            <span className={`modules-dock-icon modules-dock-icon-${item.type}`}>
                            {item.type === 'finder' && (
                                <span className="modules-dock-finder-face">
                                <span className="modules-dock-finder-eye left" />
                                <span className="modules-dock-finder-eye right" />
                                <span className="modules-dock-finder-smile" />
                                </span>
                            )}

                            {item.type === 'trash' && (
                                <span className="modules-dock-trash-shape" />
                            )}
                            </span>
                        </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Modules