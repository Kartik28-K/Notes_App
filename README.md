# 📝 AI Notes App

A full-stack notes application built with **ReactJS** and **FastAPI**, enhanced with **voice-based note automation** using **OpenAI Whisper**, **LangChain**, and **Groq's GPT-OSS 20B** model.

The application allows users to create and manage notes through a traditional web interface, while voice commands can be converted into text and processed by an LLM to perform actions such as creating notes.

---

## 🚀 Features

### 📝 Notes Management
- Create notes
- View notes
- Update notes
- Delete notes
- Pin/unpin notes
- Responsive ReactJS interface

### 🎤 Voice Automation
- Speech-to-text using **OpenAI Whisper**
- Natural-language command processing using **LangChain**
- LLM powered by **Groq**
- Uses **GPT-OSS 20B**
- Tool calling for executing note-related operations
- Voice commands can be converted into structured actions

Example:

> "Create a note titled DSA with content revise Graphs and Dynamic Programming."

The system processes the command as:

```text
Voice
  ↓
OpenAI Whisper
  ↓
Text
  ↓
LangChain + Groq
  ↓
GPT-OSS 20B
  ↓
Tool Selection
  ↓
Note Operation
```

---

## 🏗️ Tech Stack

### Frontend

- ReactJS
- JavaScript
- HTML
- CSS / Tailwind CSS

### Backend

- FastAPI
- Python
- MongoDB

### AI / Voice

- OpenAI Whisper — Speech-to-Text
- LangChain — LLM orchestration and tool calling
- Groq — LLM inference
- GPT-OSS 20B — Language model

### Development Tools

- Git
- GitHub
- VS Code

## 🔄 Voice Automation Architecture

The voice automation pipeline is designed to separate speech recognition from command execution.

```text
             🎤 User Voice
                   │
                   ▼
          ┌─────────────────┐
          │ OpenAI Whisper  │
          │ Speech-to-Text  │
          └────────┬────────┘
                   │
                   ▼
              Transcript
                   │
                   ▼
          ┌─────────────────┐
          │    LangChain    │
          └────────┬────────┘
                   │
                   ▼
          ┌─────────────────┐
          │  Groq           │
          │  GPT-OSS 20B    │
          └────────┬────────┘
                   │
                   ▼
             Tool Selection
                   │
          ┌────────┴─────────┐
          ▼                  ▼
      Add Note           Other Tools
          │                  │
          └────────┬─────────┘
                   ▼
               MongoDB
```
